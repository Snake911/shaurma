import React from 'react';
import classes from './Map.css';
import { Map, Marker } from 'yandex-map-react';

export default class ContactMap extends React.Component{
    render () {
        const lat = +this.props.lat;
        const lon = +this.props.lon;
        return (
            
            <div className={classes.Map}>
                <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[lat, lon]} zoom={10}>
                    <Marker lat={lat} lon={lon} />
                </Map>
            </div>
        );
    }
}