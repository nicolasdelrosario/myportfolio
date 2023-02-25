import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact me</span>

      <div className='contact__container container grid'>
        <div className='contact__content grid'>
          <div className='contact__box'>
            <a className='contact__icon' href='https://twitter.com/nicodelrosar1o' target='_blank' rel='noreferrer'>
              <i className='uil  uil-twitter-alt'></i>
              <h3 className='contact__icon-title'>Twitter</h3>
            </a>
          </div>
          <div className='contact__box'>
            <a className='contact__icon' href='https://github.com/nicolasdelrosario' target='_blank' rel='noreferrer'>
              <i className='uil uil-github-alt'></i>
              <h3 className='contact__icon-title'>GitHub</h3>
            </a>
          </div>
          <div className='contact__box'>
            <a className='contact__icon' href='https://www.linkedin.com/in/nicolasdelrosario' target='_blank' rel='noreferrer'>
              <i className='uil uil-linkedin-alt'></i>
              <h3 className='contact__icon-title'>Linkedin</h3>
            </a>
          </div>
        </div>
        <div className='contact__content'>
        <h3 className='contact__icon-title'>contact@nicolasdelrosario.com</h3>
        </div>
      </div>
    </section >
  )
}

export default Contact