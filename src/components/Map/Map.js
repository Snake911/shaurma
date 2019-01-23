import React from 'react';
import classes from './Map.css';
import { Map, Marker } from 'yandex-map-react';


class ContactMap extends React.Component{    
  state={
    coordinates: []
  }

  
  geocode(ymaps) {
    const coordinates=[]    
      this.props.adress.map((item, index)=>{
      ymaps.geocode(item)
      .then(result => coordinates.push(result.geoObjects.get(0).geometry.getCoordinates()))
      return true            
    })    
   
  
  this.setState({coordinates})
      
      
      console.log(this.state.coordinates)
  }
  
  render () {    

    return (          
      <div className={classes.Map}>                             
        <Map 
          loadOptions={this.props.loadOptions} 
          onAPIAvailable={(ymaps) => this.geocode(ymaps)} 
          center={[this.props.userCoordLat, this.props.userCoordLon]}
          zoom={15}>              
          <Marker lat={this.props.userCoordLat} lon={this.props.userCoordLon}/>
        </Map>          
      </div>            
    );
  }    
}

export default ContactMap;