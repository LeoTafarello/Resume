import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Routes from './routes';
import './style.css';

class App extends Component{

    render(){

        return(
            <div className='app'>
               <Routes/>
            </div>
        )
    }
}



export default App;