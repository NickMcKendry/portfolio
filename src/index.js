import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Helmet } from 'react-helmet';
import OGimage from './ogimage.png';

// Components
import Intro from './Cards/Intro/Intro';
import About from './Cards/About/About';
import Timeline from './Cards/Timeline/Timeline';
import Skills from './Cards/Skills/Skills';
import Projects from './Cards/Projects/Projects';
import Contact from './Cards/Contact/Contact';

ReactDOM.render(
  <div>
    <Helmet>
      <meta property="og:image" content={OGimage} />
    </Helmet>
    <Intro />
    <About />
    <Timeline />
    <Skills />
    <Projects />
    <Contact />
  </div>,
  document.getElementById('root')
);
