import React, {Component} from 'react';
import ImageSlider from "./Slider.js";
import "./SimpleResume.css"
import {FaRegFilePdf} from 'react-icons/fa';
import Resume from '../Image/Resume.pdf';

    class SimpleResume extends Component{
    
        render(){
            
            return(
                <div className="container mt-5 carousel">
                <h1 className="slider_title">About Me <a download href={Resume}><FaRegFilePdf size='0.9em' color='red'/></a></h1>
                <ImageSlider/>
              </div>
                )
            }
    }

export default SimpleResume;