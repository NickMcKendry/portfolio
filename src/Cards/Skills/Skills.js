import React, { Component } from 'react';
import './Skills.css';
import FSD from './fsd.png'

export default class Skills extends Component {
  render() {
    return (
      <div className="main4 section-padding has-after-border" style={{backgroundImage: `url(${FSD})`}}>
        <div className="container skills">
          <h1 className="section-header">Skills</h1>
          <div className="row skill-container">
            <div className="col-sm-6">
              <div className="skill">
                <ul className="skill-list">
                  <li className="skill-title">JavaScript</li>
                  <li className="skill-strength">80%</li>
                </ul>
                <div className="skill-progress">
                  <div className="progress-bar" style={{width: "80%", height: "2px"}}></div>
                </div>
                <span className="years-experience">1.5 years experience</span>
              </div>
              <div className="skill">
                <ul className="skill-list">
                  <li className="skill-title">React</li>
                  <li className="skill-strength">90%</li>
                </ul>
                <div className="skill-progress">
                  <div className="progress-bar" style={{width: "90%", height: "2px"}}></div>
                </div>
                <span className="years-experience">1.5 years experience</span>
              </div>
              <div className="skill">
                <ul className="skill-list">
                  <li className="skill-title">Angular</li>
                  <li className="skill-strength">70%</li>
                </ul>
                <div className="skill-progress">
                  <div className="progress-bar" style={{width: "70%", height: "2px"}}></div>
                </div>
                <span className="years-experience">1.5 years experience</span>
              </div>
              <div className="skill">
                <ul className="skill-list">
                  <li className="skill-title">HTML/CSS/SCSS</li>
                  <li className="skill-strength">95%</li>
                </ul>
                <div className="skill-progress">
                  <div className="progress-bar" style={{width: "95%", height: "2px"}}></div>
                </div>
                <span className="years-experience">1.5 years experience</span>
              </div>
              <div className="skill">
                <ul className="skill-list">
                  <li className="skill-title">Node</li>
                  <li className="skill-strength">65%</li>
                </ul>
                <div className="skill-progress">
                  <div className="progress-bar" style={{width: "65%", height: "2px"}}></div>
                </div>
                <span className="years-experience">1 year experience</span>
              </div>
              <div className="skill">
                <ul className="skill-list">
                  <li className="skill-title">Illustrator/Sketch</li>
                  <li className="skill-strength">85%</li>
                </ul>
                <div className="skill-progress">
                  <div className="progress-bar" style={{width: "85%", height: "2px"}}></div>
                </div>
                <span className="years-experience">3 years experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
