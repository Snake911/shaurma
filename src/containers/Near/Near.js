import React, {Component} from 'react';
import classes from './Near.css';
import ContactMap from '../../components/Map/Map';

navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude)
})

class Near extends Component {
    state = {
        lat: navigator.geolocation.getCurrentPosition(function(position) {
            return position.coords.latitude;
        }),
        lon: navigator.geolocation.getCurrentPosition(function(position) {
            return position.coords.longitude;
        }),
    } 
    
    render(){    
        return (            
            <div className={classes.Near}>
            <h1>Рядом</h1>
            <ContactMap lat="55.754734" lon="37.583314"/>
            {console.log(this.state)}
            </div>
        )
    }
}

export default Near;