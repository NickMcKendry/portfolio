import React, { Component } from 'react';
import './About.css';
import Laptop from './laptop.png';

export default class About extends Component {
  render() {
    return (
      <div className="main2 section-padding" style={{backgroundImage: `url(${Laptop})`}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="section-header">About Me</h1>
              <p className="about-text">I'm a freelance full stack mobile/web developer from Denver CO. I specialize in Javascript frontend frameworks (especially react), HTML, SCSS, Node.js, Express, and SQL/NoSql databases. I'm a proud Galvanize graduate and I love learning cool new things to improve upon my development skills. Feel free to contact me with any development work you may have!</p>
              <a href="https://drive.google.com/file/d/1V7btOEy5J4_SMLWEdnrQC89JNcPSmjzK/view?usp=sharing" className="resume-button" data-wow-delay=".4s" target="_blank">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
