import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container grid'>
        <div className='footer__content'>
          <a className='footer__logo' href='index.html'>Nicolas</a>
        </div>
        <div className='footer__content'>
          <span className='footer__description'>2023 - All rights reserved </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer