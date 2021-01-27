import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component{
   
    render(){

        return(
            <div>
                <h3>Ops! Page not found</h3>
                <Link to="/"> Back to Home </Link><br/><br/>
            </div>
        )
    }
}

export default Erro;