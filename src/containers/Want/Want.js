import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../components/UI/Button/Button';


class Want extends Component {
    render(){
        return (
            <>
                <h1>Хочу шаурму</h1>
                <Button><NavLink to={'/all'}>Все</NavLink></Button>
                <Button><NavLink to={'/near'}>Рядом</NavLink></Button>
            </>
        )
    }
}

export default Want;