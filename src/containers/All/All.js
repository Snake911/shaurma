import React, {Component} from 'react';
import { connect } from 'react-redux'
import Card from '../../components/Card/Card';
import classes from './All.css';

class All extends Component {
   
    render(){
       
        return (
            <div className={classes.All}>
            <h1>Все</h1>
            <Card  data={this.props.points}/>
            </div>
        )
    }
}
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
        return {
            points: store.points,
        }
    }

export default connect(mapStateToProps)(All);