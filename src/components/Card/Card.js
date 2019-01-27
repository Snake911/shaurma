import React from 'react';
import classes from './Card.css';
import {NavLink} from 'react-router-dom'

class Card extends React.Component {
    renderCards = () => {
        const {data}  = this.props;
        let cardTemplates = null;

        if(data.length){
            cardTemplates = data.map((item, index) => {
                return (
                    <div className={classes.Card} key={item.id}>
                        <img src={item.logo} alt="logo"/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                            <p>Минимальная цена: {item.minPrice} рублей</p>
                            <p>Адрес: {item.adress}</p>
                            <NavLink to={`/all?item=${item.id}`}>Подробнее</NavLink>
                        </div>
                    </div>
                )
            })
        }

        return cardTemplates
    }

    render(){
        return this.renderCards();
    }
}

export default Card;



