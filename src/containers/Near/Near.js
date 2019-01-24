import React, {Component} from 'react';
import classes from './Near.css';
import ContactMap from '../../components/Map/Map';


class Near extends Component {
    state = {
        userCoordLat:57.91944, 
        userCoordLon: 59.965,
        adress:[
            'Нижний Тагил, пр. Уральский, 58',
            'Нижний Тагил, ул. Тагилстроевская, 1',
            'Нижний Тагил, ул. Ломоносова, 1',
            'Нижний Тагил, ул. Металлургов, 1',
            'Нижний Тагил, ул. Октябрьской революции, 1',
            'Нижний Тагил, ул. Газетная, 1',
            'Нижний Тагил, ул. Калинина, 1'

        ]
    }
    coords = () => {    
         function error(errorCode) {
            alert("Произошла ошибка!");
         }
        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                userCoordLat: position.coords.latitude,
                userCoordLon: position.coords.longitude
            })}, error, {enableHighAccuracy:true})     
    }
    
    componentWillMount(){
        this.coords();
    }  
    
    render(){  
        return (                         
            <div className={classes.Near}>            
            <h1>Рядом</h1>            
                <ContactMap 
                width="100%"
                    userCoordLat={this.state.userCoordLat}
                    userCoordLon={this.state.userCoordLon}
                    adress={this.state.adress}
                />           
            </div>
        )
    }
}

export default Near;