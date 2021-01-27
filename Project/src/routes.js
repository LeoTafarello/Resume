import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home/Home.js';
import Header from './Header/Header.js';
import SimpleResume from './SimpleResume/SimpleResume.js';
import Skills from './Skills/Skills.js';
import Footer from './Footer/Footer.js';
import Experience from './Experience/Experience.js';
import Erro from './Erro';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/SimpleResume' component={SimpleResume}/>
                <Route exact path='/Skills' component={Skills}/>
                <Route exact path='/Experience' component={Experience}/>
                <Route path='*' component={Erro}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;