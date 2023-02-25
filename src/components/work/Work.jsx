import React from 'react';
import './Work.css';
import Works from './Works';

const Work = () => {
  return (
    <section className='work section' id='work'>
      <h2 className='section__title'>Work</h2>
      <span className='section__subtitle'>Most recent projects</span>

      <Works />
    </section>
  )
}

export default Work