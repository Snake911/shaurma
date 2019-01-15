import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import classes from './Want.css';


class Want extends Component {
    render(){
        return (
            <div className={classes.Want}>
                <h1>Хочу шаурму</h1>
                <Button><NavLink to={'/all'}>Все</NavLink></Button>
                <Button><NavLink to={'/near'}>Рядом</NavLink></Button>
            </div>
        )
    }
}

export default Want;