import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

function Header(){

        return(
            <header id='main-header'>
                <div className="header-content">
                    <Link to = "/SimpleResume">
                        Simple Resume
                    </Link>
                </div>
                <div class='pages'>
                    <ul>
                        <li>
                            <a className='icones'>
                                 <Link to ='SKILLS'>Skills</Link>
                             </a>
                             <a className='icones'>
                                  <Link to = '/'>Bio</Link>
                             </a>
                              <a className='icones'>
                                  <Link to ='EXPERIENCE'>Experience</Link>
                              </a>
                              <a className='icones'>
                                 <Link TO = 'EDUCATION'>Education</Link>
                              </a>
                        </li>
                     </ul>
                </div>
            </header>
        );
    }


export default Header;
