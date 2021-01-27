import React, {Component} from 'react';
import ImageSlider from "./Slider.js";
import "./SimpleResume.css"
import {FaRegFilePdf} from 'react-icons/fa';
import Resume from '../Image/Resume.pdf';

    class SimpleResume extends Component{
    
        render(){
            
            return(
                <div className="container mt-5 carousel">
                <h1 className="slider_title">About Me</h1>
                <h2 className='slider-resume'>Hello, I'm Leonardo and i'm 23 years old. I have been in the IT area for three and a half years at Bosch in the areas of 
                development and automation as (CI-DAV) and GS / TET-LA (DIA - Digital Innovation and Automation). Making web applications
                 is what motivates me the most, as it makes me use and develop my creativity so much both in programming and in design in addition to always providing me with new 
                 challenges.Nowadays one of my main goals is to have an international experience to get and bring new ideas and experiences to the team. I hope you enjoyed it so we can talk or share emails, thank you. </h2>
                <ImageSlider/>
                <h3 className='slider-resume-child'>Click on the icon below to download my Resume</h3>
                <h3><a download href={Resume}><FaRegFilePdf size='3em' color='red'/></a></h3>
              </div>
                )
            }
    }

export default SimpleResume;

//<a download href={Resume}><FaRegFilePdf size='3em' color='red'/></a>