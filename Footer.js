import React, {Component} from 'react';
import './Footer.css'
import Linkedin from '../Image/Linkedin.JPG';
import Facebook from '../Image/Facebook.png';
import Instagram from '../Image/Instagram.jpg';

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
                            <img class='logo' src={Linkedin} alt itemProp='logo'></img>
                        </td>
                    </li>
                    <li>
                        <td onClick={()=> window.open('https://www.facebook.com/leonardo.tafarello.3', "_blank")}>
                            <img class='logo' src={Facebook} alt itemProp='logo'></img>
                        </td>
                    </li>
                    <li>
                        <td onClick={()=> window.open('https://www.instagram.com/leootafarello/?hl=pt-br', "_blank")}>
                            <img class='logo' src={Instagram} alt itemProp='logo'></img>
                        </td>
                    </li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;