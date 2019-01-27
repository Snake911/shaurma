import React, {Component} from 'react';
import classes from './Near.css';
import ContactMap from '../../components/Map/Map';
import {connect} from 'react-redux';


class Near extends Component {    
    render(){ 
        return (                         
            <div className={classes.Near}>            
            <h1>Рядом</h1>            
                <ContactMap 
                width="100%"
                    points={this.props.points}
                />           
            </div>
        )
    }
}
const mapStateToProps = store => {
    return {
        points: store.points
    }
}
export default connect(mapStateToProps)(Near);