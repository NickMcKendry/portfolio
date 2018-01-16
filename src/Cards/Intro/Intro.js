import React, { Component } from 'react';
import './Intro.css';
import Logo from './nm-logo.png';
import Cover from './cover.png';

export default class Intro extends Component {
  render() {
    return (
      <div className="main has-after-border" style={{ backgroundImage: `url(${Cover})` }}>
        <div className="container">
          <img className="logo" src={Logo} />
          <div className="intro-text">
            <h1>Hello!</h1>
            <h1>I'm <strong>Nick McKendry</strong></h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
      </div>
    );
  };
};
