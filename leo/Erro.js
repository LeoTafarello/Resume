import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Erro.css';

class Erro extends Component{
   
    render(){

        return(
            <div>
                <h3 className='main'>Ops! Page not found</h3>
                <h5>click on the text below to back to the home page</h5>
                <h3 className='main-child'><Link to="/" > Back to Home </Link></h3>
            </div>
        )
    }
}

export default Erro;