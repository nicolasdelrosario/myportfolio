import React from 'react'
import './ScrollUp.css'

const ScrollUp = () => {
  window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('.scrollup');
    //when the scroll is higher than 560 vierport height.
    scrollUp.classList.toggle('show-scroll', window.scrollY >= 560);
  });
  return (
    <a href="#" className='scrollup'>
      <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default ScrollUp