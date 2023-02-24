import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class="uil uil-lightbulb-alt about__icon"></i>
        <h3 className='about__title'>Creative <br/> Direction</h3>
      </div>

      <div className='about__box'>
        <i class="uil uil-brain about__icon"></i>
        <h3 className='about__title'>Critical <br/> thinking</h3>
      </div>

      <div className='about__box'>
        <i class="uil uil-search-alt about__icon"></i>
        <h3 className='about__title'>Quick <br/> learning</h3>
      </div>
    </div>
  )
}

export default Info