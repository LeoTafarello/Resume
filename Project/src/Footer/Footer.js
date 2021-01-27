import React, {Component} from 'react';
import './Footer.css'
import Linkedin from '../Image/Linkedin.JPG';
import {FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa';

function Footer(){

    return(
        <footer id='main-footer'>

            <div className='column'>
                <h2>Leonardo Tafarello</h2>
                <ul className='status'>
                    <li>+55(11)99677-3128</li>
                    <li>SÃO PAULO,BRAZIL</li>
                    <li>City Itatiba, 64, Street Benedito Aparecido dos Santos</li>
                </ul>
            </div>
            <div className='column'>
                <h2>Social</h2>
                <ul className='social'>
                    <li>
                        <td onClick={()=> window.open("https://www.linkedin.com/in/leonardo-tafarello-b71b7a183/", "_blank")}>
                            <FaLinkedin size='3em' color='blue'/>
                        </td>
                    </li>
                    <li>
                        <td onClick={()=> window.open('https://www.facebook.com/leonardo.tafarello.3', "_blank")}>
                            <FaFacebook size='3em' color='blue'/>
                        </td>
                    </li>
                    <li>
                        <td onClick={()=> window.open('https://www.instagram.com/leootafarello/?hl=pt-br', "_blank")}>
                            <FaInstagram size='3em' color='black'/>
                        </td>
                    </li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;