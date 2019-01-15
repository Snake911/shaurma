import React from 'react';
import classes from './Card.css';

class Card extends React.Component {
    renderCards = () => {
        const {data}  = this.props;
        let cardTemplates = null;

        if(data.length){
            cardTemplates = data.map((item) => {
                return (
                    <div className={classes.Card} key={item.id}>
                        <img src={item.logo} alt="logo"/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>Минимальная цена: {item.price} рублей</p>
                            <p>Рейтинг: {item.rating}</p>
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



