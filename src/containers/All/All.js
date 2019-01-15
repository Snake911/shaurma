import React, {Component} from 'react';
import Card from '../../components/Card/Card';
import classes from './All.css';

class All extends Component {
   
    render(){
        const points = [
            {
                id: 1,
                name: "Русский гриль",
                logo: "https://storage.needpix.com/rsynced_images/banner-2383999_1280.png",
                rating: 3.5,
                price: 80
            },
            {
                id: 2,
                name: "Русский гриль",
                logo: "https://storage.needpix.com/rsynced_images/banner-2383999_1280.png",
                rating: 3.5,
                price: 80
            },
            {
                id: 3,
                name: "Русский гриль",
                logo: "https://storage.needpix.com/rsynced_images/banner-2383999_1280.png",
                rating: 3.5,
                price: 80
            },
        ];
        return (
            <div className={classes.All}>
            <h1>Все</h1>
            <Card  data={points}/>
            </div>
        )
    }
}

export default All;