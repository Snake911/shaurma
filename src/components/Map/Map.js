import React from 'react';
import classes from './Map.css';
import { Map, Marker } from 'yandex-map-react';



class ContactMap extends React.Component{    
  state={
    coordinates: []
  }

  
  geocode(ymaps) {
    const coordinates=[];
    let coords = []; 
      this.props.adress.map(async (item, index)=>{
      await ymaps.geocode(item)
      .then((result) => {  coordinates[index] =  result.geoObjects.get(0).geometry.getCoordinates()})
        coords.push(coordinates[index])
        this.setState({coordinates: coords})
      return true            
    })  
 
  console.log(this.state)
  }
  renderMarkers() {
    
    const markers = this.state.coordinates.map((item, index) => {
     return (<Marker key={index} lat={item[0]} lon={item[1]} />)
    })

    return markers;
  }
  
  render () {  
    console.log(this.state)  
    return (          
      <div className={classes.Map}>                             
        <Map 
          loadOptions={this.props.loadOptions} 
          onAPIAvailable={(ymaps) => this.geocode(ymaps)} 
          center={[this.props.userCoordLat, this.props.userCoordLon]}
          zoom={15}>
          {this.renderMarkers()}
        </Map>          
      </div>            
    );
  }    
}

export default ContactMap;