import React, {Component, useState} from 'react';
import './Skills.css';
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import Programmer from '../Image/Programmer.png';
import RPA from '../Image/RPA.png';
import AI from '../Image/AI.png';
import IoT from '../Image/IoT.jpg';

class Skills extends Component{

    state = {
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
        spy3: {}
      };

    render(){
        

        return(
            <div className='Skills'>
                <div className='Skills-container'>
                    <div className='container'>
                        <div class='row'>
                            <div className='component-header'>
                                <h2 className='component-header-text'>Skills</h2>
                            </div>
                            <div className='skills-container-child'>
                                <ul className='skills-container-list'>
                                    <li className='skills-item'>
                                        <img src={Programmer}></img>
                                        <div className='box'>
                                        </div>
                                            <button className={cx("box__toggle", {"box__toggle--active": this.state.isOpen1})} onClick={() => this.toggle(1)}>
                                                <span className="box__toggle-text">Programmer Language</span>
                                                <div className="rotate90">
                                                    <svg className={cx("icon", { "icon--expanded": this.state.isOpen1 })} viewBox="6 0 12 24">
                                                        <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                                                    </svg>
                                                </div>
                                            </button>
                                        <Collapse isOpen={this.state.isOpen1} className={"box__collapse box__collapse--gradient " + (this.state.isOpen1 ? "box__collapse--active" : "")}>
                                            <div className="box__content">
                                                <p>React</p>
                                                <p>Angular</p>
                                                <p>Vue</p>
                                                <p>CSS</p>
                                                <p>HTML</p>
                                                <p>SQL</p>
                                                </div>
                                        </Collapse>
                                    
                                    </li>
                                    <li className='skills-item'>
                                            <img src={RPA}></img>
                                            <div className='box'>
                                        </div>
                                            <button className={cx("box__toggle", {"box__toggle--active": this.state.isOpen1})} onClick={() => this.toggle(2)}>
                                                <span className="box__toggle-text">RPA</span>
                                                <div className="rotate90">
                                                    <svg className={cx("icon", { "icon--expanded": this.state.isOpen2 })} viewBox="6 0 12 24">
                                                        <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                                                    </svg>
                                                </div>
                                            </button>
                                        <Collapse isOpen={this.state.isOpen2} className={"box__collapse box__collapse--gradient " + (this.state.isOpen2 ? "box__collapse--active" : "")}>
                                            <div className="box__content">
                                                <p>Automation Anywhere</p>
                                                <p>Catalytic</p>
                                                <p>UiPath</p>
                                                </div>
                                        </Collapse>
                                    </li>
                                    <li className='skills-item'>
                                            <img src={AI}></img>
                                            <div className='box'>
                                        </div>
                                            <button className={cx("box__toggle", {"box__toggle--active": this.state.isOpen3})} onClick={() => this.toggle(3)}>
                                                <span className="box__toggle-text">AI</span>
                                                <div className="rotate90">
                                                    <svg className={cx("icon", { "icon--expanded": this.state.isOpen2 })} viewBox="6 0 12 24">
                                                        <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                                                    </svg>
                                                </div>
                                            </button>
                                        <Collapse isOpen={this.state.isOpen3} className={"box__collapse box__collapse--gradient " + (this.state.isOpen3 ? "box__collapse--active" : "")}>
                                            <div className="box__content">
                                                <p>ChatBot</p>
                                                </div>
                                        </Collapse>
                                    </li>
                                    <li className='skills-item'>
                                         <img src={IoT}></img>
                                         <div className='box'>
                                        </div>
                                            <button className={cx("box__toggle", {"box__toggle--active": this.state.isOpen1})} onClick={() => this.toggle(4)}>
                                                <span className="box__toggle-text">IoT</span>
                                                <div className="rotate90">
                                                    <svg className={cx("icon", { "icon--expanded": this.state.isOpen4 })} viewBox="6 0 12 24">
                                                        <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                                                    </svg>
                                                </div>
                                            </button>
                                        <Collapse isOpen={this.state.isOpen4} className={"box__collapse box__collapse--gradient " + (this.state.isOpen4 ? "box__collapse--active" : "")}>
                                            <div className="box__content">
                                                <p>Arduino</p>
                                                <p>Pic</p>
                                                </div>
                                        </Collapse>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
   
        toggle = (index) => {
            let collapse = "isOpen" + index;
        
            this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
          };
}

export default Skills;