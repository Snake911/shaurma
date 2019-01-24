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
            'Нижний Тагил, ул. Газетная, 1',
            'Нижний Тагил, ул. Калинина, 1'

        ],
        loading: true
    }
    coords = () => {
    
         function error(errorCode) {
            var msg = "";
            switch (errorCode) {
              case 1: msg = "Нет разрешения"; // Пользователь не дал разрешения на определение местоположения
                break;
              case 2: msg = "Техническая ошибка";
                break;
              case 3: msg = "Превышено время ожидания";
                break;
              default: msg = "Что то случилось не так";
           }
            alert(msg);
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
    componentDidMount(){
        this.setState({
          loading: false
        })
      }  
    render(){  
        return (  
            this.state.loading ?
            <Loader />
                :                          
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