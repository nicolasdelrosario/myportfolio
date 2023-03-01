import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a href='https://twitter.com/nicodelrosar1o' className='home__social-icon' aria-label='Twitter' target='_blank' rel='noreferrer'>
        <i className='uil uil-twitter-alt'></i>
      </a>

      <a href='https://github.com/nicolasdelrosario' className='home__social-icon' aria-label='GitHub' target='_blank' rel='noreferrer'>
        <i className='uil uil-github-alt'></i>
      </a>

      <a href='https://www.linkedin.com/in/nicolasdelrosario' className='home__social-icon' aria-label='Linkedin' target='_blank' rel='noreferrer'>
        <i className='uil uil-linkedin-alt'></i>
      </a>
    </div>
  )
}

export default Social