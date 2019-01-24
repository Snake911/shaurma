import React, {Component} from 'react';
import classes from './Near.css';
import ContactMap from '../../components/Map/Map';
import Loader from '../../components/UI/Loader/Loader';

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
            'Нижний Тагил, ул. Газетная, 1'

        ],
        loading: true
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
    componentDidMount(){
        this.setState({
          loading: false
        })
      }  
    render(){
        const loadOptions = {
            lang: 'ru_RU',
            apikey: '424e8338-02d6-4172-8698-59b1cd6343d4'            
        }            
        return (  
            this.state.loading ?
            <Loader />
                :                          
            <div className={classes.Near}>            
            <h1>Рядом</h1>            
                <ContactMap 
                    loadOptions ={loadOptions}
                    userCoordLat={this.state.userCoordLat}
                    userCoordLon={this.state.userCoordLon}
                    adress={this.state.adress}
                />           
            </div>
        )
    }
}

export default Near;