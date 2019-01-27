import React from 'react';
import classes from './Map.css';
import { Map, Marker} from 'yandex-map-react';

const coordinates=[];
let userCoord = [];

class ContactMap extends React.Component{    
  state = {
    coordinates: [],
    userLat:57.9114,
    userLon: 59.9668
  }
  geocode(ymaps) { 
     
    const adress =[]
    this.props.points.forEach(element => {
      adress.push(element.adress);
    });
    adress.map(async (item, index)=>{
       await ymaps.geocode(item)
      .then(async result => await coordinates.push( result.geoObjects.get(0).geometry.getCoordinates()))                  
      this.setState({coordinates})
    })
    ymaps.geolocation.get({
      // Зададим способ определения геолокации
      // на основе ip пользователя.
      //provider: 'yandex',
      // Включим автоматическое геокодирование результата.
       autoReverseGeocode: true
  }).then(async (result) => {
      await userCoord.push(result.geoObjects.get(0).geometry.getCoordinates());
      console.log(userCoord)
      this.setState({
        userLat: userCoord[0][0],
        userLon: userCoord[0][1]
      })
      console.log(this.state);
  });
  }
  renderMarkers() {   
    const markers = this.state.coordinates.map((item, index) => {
     return (<Marker 
     onClick={this.markerClickHandler} 
     key={index} 
     lat={item[0]} 
     lon={item[1]} 
     balloonState="closed" 
     options={{preset:'islands#yellowFoodCircleIcon'}}
     properties={{ balloonContentHeader: this.props.points[index].name, 
     balloonContentBody: this.props.points[index].adress, 
     balloonContentFooter:"Минимальная цена " + this.props.points[index].minPrice}}          
      />)
    })
    return markers;
  }
  
   
  render () { 
    return (      
      <div className={classes.Map}>                             
        <Map
          minWidth="100px" 
          width="100%" 
          height="90vh"         
          onAPIAvailable={(ymaps) => this.geocode(ymaps)} 
          loadOptions={{apikey: "424e8338-02d6-4172-8698-59b1cd6343d4"}}
          center={[this.state.userLat, this.state.userLon]}
          zoom={15}>
          {this.renderMarkers()}
        <Marker 
          onClick={this.markerClickHandler} 
          lat={this.state.userLat} 
          lon={this.state.userLon}  
          options={{preset:'islands#geolocationIcon'}}          
          />
        </Map>          
      </div>            
    );
  }    
}

export default ContactMap;
