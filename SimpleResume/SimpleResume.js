import React, {Component} from 'react';
import './SimpleResume.css';
import Resume from '../Image/Resume.JPG';
import Resume2 from '../Image/Resume2.JPG';
import PDF from '../Image/PDF.jpg';
import {Link} from 'react-router-dom';


class SimpleResume extends Component{


    render(){

        return(
            <div className='row'>
                <div className='about'>
                    <ul>
                        <li>
                            <Link to=''> 
                                <img class='logoPDF' src={PDF} alt itemProp='logo'></img>
                            </Link>
                        </li>
                        <br></br><br></br>
                        <li>
                            Clike on the image do Download the Resume
                        </li>
                    </ul>
                </div>
                <div className='column'>
                    <img src={Resume} width='100%' alt='Resume1'/>
                </div>
                <div className='column'>
                <img src={Resume2} width='100%' alt='Resume2'/>
                </div>
            </div>
        )
    }
}



export default SimpleResume;
