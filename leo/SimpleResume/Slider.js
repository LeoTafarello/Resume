  
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brazil from '../Image/Brazil.png'
import German from '../Image/German.png'
import EUA from '../Image/EUA.png'
import Creative from '../Image/Creative.png'
import Learning from '../Image/Learning.png'
import Communicative from '../Image/Communicative.png'
import Group from '../Image/Group.png'

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Brazil}/>
                    </div>
                    <div className="details">
                        <h2>Portuguese <span className="job-title">Native Language</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={EUA} />
                    </div>
                    <div className="details">
                        <h2>English <span className="job-title">English Exchange - English School of Canada</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={German} />
                    </div>
                    <div className="details">
                        <h2>German <span className="job-title">Learning Since 11/2019</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Creative} />
                    </div>
                    <div className="details">
                        <h2>Creative and Proactive</h2>
                    </div>
                </div>           
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Group} />
                    </div>
                    <div className="details">
                        <h2>Good group relationship</h2>
                    </div>
                </div>           
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Learning} />
                    </div>
                    <div className="details">
                        <h2>Good learning ability</h2>
                    </div>
                </div>           
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Communicative}/>
                    </div>
                    <div className="details">
                        <h2>Communicative</h2>
                    </div>
                </div>           
            </div>
        </Slider>
    )
}

export default ImageSlider