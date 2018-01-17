import React, { Component } from 'react';
import './Projects.css';
import Revkit from './Revkit.png';
import RevkitMods from './RevkitMods.png';
import RevkitBuild from './RevkitBuild.png';
import AgileOverload from './AgileOverload.png';
import RevMatch from './RevMatch.png';
import BTG from './Leaf.svg';

export default class Projects extends Component {

  render() {
    return (
      <div className="main5 has-before-border section-padding">
        <div className="container text-center">
          <h1 className="section-header">Portfolio</h1>
          <p className="subtitle-portfolio">Check out my projects below, I'm always adding new projects to my portfolio!</p>
          <div className="project-gallery-section">
            <div className="gallery-container row">
              <div className="mix col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="https://revkit.com" target="_blank">
                  <div className="item">
                    <img src={Revkit} />
                    <div className="info">
                      <div className="content">
                        <h4>REVKIT</h4>
                        <p>REVKIT is a webapp for tracking, and showing off your modded cars.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="https://mods.revkit.com" target="_blank">
                  <div className="item">
                    <img src={RevkitMods} />
                    <div className="info">
                      <div className="content">
                        <h4>REVKIT Mods</h4>
                        <p>REVKIT mods was the first platform we built for REVKIT, this is a platform for tracking and finding new mods for your ride. Built with angular 4, SCSS, Node, Express, and MySql</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="https://revkit.com/signup/" target="_blank">
                  <div className="item">
                    <img src={RevkitBuild} />
                    <div className="info">
                      <div className="content">
                        <h4>REVKIT Build Form</h4>
                        <p>I was the lead dev of a team of 4 for this project, this form revolutionized the way things were done at REVKIT. This allowed user a good looking experience to subit their build for a build page. The data was then turned into a mark down file for our cms and would generate the template automatically. This turned a 2 hour task into a 5 minute task. Built using React, Node, Express, and MySql.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="https://agile-overload.herokuapp.com/" target="_blank">
                  <div className="item">
                    <img src={AgileOverload} />
                    <div className="info">
                      <div className="content">
                        <h4>Agile Overload</h4>
                        <p>This was my second quarter project at Galvanize and my first project working in a group and also my first project with backend. Agile Overload is a 4 player game based on agile methodologies. Built with JavaScript, Node, Express, WebSockets, and PostgreSql.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="https://www.youtube.com/watch?v=oFETItph-Jo#t=1h55m30s" target="_blank">
                  <div className="item">
                    <img src={RevMatch} />
                    <div className="info">
                      <div className="content">
                        <h4>RevMatch</h4>
                        <p>This was my capstone project at Galvanize. Revmatch is a mobile app that is a social media pointed at car enthusiasts. Built with React Native, Node, MongoDB, and Mongoose.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="https://btg-designs.surge.sh" target="_blank">
                  <div className="item">
                    <img src={BTG} />
                    <div className="info">
                      <div className="content">
                        <h4>Back To The Garden</h4>
                        <p>This was a small design project I did for a friend. I made all of the logos by hand using Sketch, he sold these shirts to fundraise a mission trip.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
