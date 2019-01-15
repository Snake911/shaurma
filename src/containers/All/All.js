import React, {Component} from 'react';
import classes from './All.css';

class All extends Component {
   
    render(){
        const points = [
            {
                id: 1,
                name: "Русский гриль",
                logo: "/img/rusgril",
                rating: 3.5,
                price: 80
            },
            {
                id: 1,
                name: "Русский гриль",
                logo: "/img/rusgril",
                rating: 3.5,
                price: 80
            },
            {
                id: 1,
                name: "Русский гриль",
                logo: "/img/rusgril",
                rating: 3.5,
                price: 80
            },
        ];
        return (
            <div className={classes.All}>
            <h1>Все</h1>
            </div>
        )
    }
}

export default All;