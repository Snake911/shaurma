import React, {Component} from 'react';
import classes from './Near.css';
import ContactMap from '../../components/Map/Map';

class Near extends Component {
    
    render(){           
        return (                        
            <div className={classes.Near}>            
            <h1>Рядом</h1>            
                <ContactMap />           
            </div>
        )
    }
}

export default Near;