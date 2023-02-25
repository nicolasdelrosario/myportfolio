import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a href='https://www.instagram.com/potatocode_' className='home__social-icon' target='_blank' rel='noreferrer'>
        <i className='uil uil-instagram'></i>
      </a>

      <a href='https://github.com/nicolasdelrosario' className='home__social-icon' target='_blank' rel='noreferrer'>
        <i className='uil uil-github-alt'></i>
      </a>

      <a href='https://www.linkedin.com/in/nicolasdelrosario' className='home__social-icon' target='_blank' rel='noreferrer'>
        <i className='uil uil-linkedin-alt'></i>
      </a>
    </div>
  )
}

export default Social