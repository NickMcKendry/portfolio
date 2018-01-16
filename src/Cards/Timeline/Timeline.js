import React, { Component } from 'react';
import './Timeline.css';

export default class Timeline extends Component {
  render() {
    return (
      <div className="main3 section-padding has-before-border">
        <div className="container">
          <div className="education text-center">
            <h1 className="timeline-section-header">Education</h1>
            <p className="subtitle col-sm-9">After graduating highschool I went to CMU as a computer science student, after a year I saw Galvanize as a better fit for me and what i wanted to accomplish.</p>
            <div className="timeline-container">
              <div className="block block-left">
                <h3>High School</h3>
                <p>Arvada West High School 2011-2015</p>
              </div>
              <div className="block block-right">
                <h3>Computer Science</h3>
                <p>Colorado Mesa University 2015-2016</p>
              </div>
              <div className="block block-left">
                <h3>Full Stack Development</h3>
                <p>Galvanize Immersive 2017</p>
              </div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="education text-center">
            <h1 className="timeline-section-header">Employment</h1>
            <p className="subtitle col-sm-9">Right after galvanize I worked as an intern for a startup called REVKIT and soon after was promoted to "lead" dev when our senior dev left, I decided to leave here and start doing freelance work.</p>
            <div className="timeline-container">
              <div className="block block-left">
                <h3>Junior Full Stack Developer Internship</h3>
                <p>REVKIT August 2017 - November 2017</p>
              </div>
              <div className="block block-right">
                <h3>Lead Developer</h3>
                <p>REVKIT November 2017 - January 2018</p>
              </div>
              <div className="block block-left">
                <h3>Freelance Developer</h3>
                <p>January 2018 - Present</p>
              </div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
