import React from 'react';
import About from '../about';
import Projects from '../projects';
import Contact from '../contact';

import './content.scss'

const Container = () => {
  return (
    <div className="content">
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Container