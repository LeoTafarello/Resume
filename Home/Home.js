import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Work from '../Image/Work.jpg';
import Skills from '../Image/Skills.JPG';

class Home extends Component{

        constructor(props){
            super(props);
            this.state={
            };
   

    }
    render(){

        return(
            <section id='BIO'>
                <article id='article'>
                    <header>
                        <div className='container'>
                            FALAR SOBRE MINHA PESSOA
                        </div>
                    </header>
                    <br/><br/><br/>
                    <div className='image'>
                        <div className='image-child'>
                            <img src={Work} alt='BIO cape'/>
                        </div>
                    </div>
                    <div className='main-figure'>
                    </div>
                </article>    
            </section>
        )
    }

}


export default Home;
