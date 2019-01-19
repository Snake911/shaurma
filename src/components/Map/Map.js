import React from 'react';
import classes from './Map.css';
import { Map, Marker } from 'yandex-map-react';

class ContactMap extends React.Component{
    state = {
        coordinates:[57.91944, 59.965],
        userCoordLat:57.91944, 
        userCoordLon: 59.965
    }
    coords = () => {
        navigator.geolocation.getCurrentPosition ( async (position) => {
            this.setState({
                userCoordLat: position.coords.latitude,
                userCoordLon: position.coords.longitude
            })
        })     
    }
    componentWillMount(){
        this.coords();
    }

    geocode(ymaps) {
        ymaps.geocode('Нижний Тагил, пр. Уральский, 58')
          .then(result => this.setState({ coordinates: result.geoObjects.get(0).geometry.getCoordinates() }))
    }
    render () {
        const loadOptions = {
            lang: 'ru_RU',
            apikey: '424e8338-02d6-4172-8698-59b1cd6343d4'            
        }    
        return (            
            <div className={classes.Map}>                        
                <Map 
                    loadOptions={loadOptions} 
                    onAPIAvailable={(ymaps) => this.geocode(ymaps)} 
                    center={[this.state.coordinates[0], this.state.coordinates[1]]}
                    zoom={14}>
                    <Marker lat={this.state.userCoordLat} lon={this.state.userCoordLon}/>                     
                </Map>
                {console.log(this.state)}           
            </div>
            
        );
    }
}

export default ContactMap;