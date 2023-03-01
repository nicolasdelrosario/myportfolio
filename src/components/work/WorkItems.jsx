import React, { useState } from 'react'

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt={item.title} className='work__img'></img>
      <h3 className='work__title'>{item.title}</h3>

      <span className='work__button' onClick={() => toggleTab(1)}>
        More Details
        <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </span>

      <div className={toggleState === 1 ? 'work__modal active-modal' : 'work__modal'}>
        <div className='work__modal-content'>
          <i className='uil uil-times work__modal_close' onClick={() => toggleTab(0)}></i>

          <h3 className='work__modal-title'>{item.title}</h3>
          <p className='work__modal-description'>{item.description}</p>

          <ul className='work__modal-technologies'>
            {item.technologies.map((technology, index) => (
              <li className='work__modal-technology' key={index}>
                <i className='uil uil-check-circle work__modal-icon'></i>
                <p className='services__modal-info'>{technology}</p>
              </li>
            ))}
          </ul>

          <a href={item.github} className='work__button' target='_blank' rel='noreferrer'>
            Github
            <i className='bx bx-right-arrow-alt work__button-icon'></i>
          </a>
        </div>
      </div>

      <a href={item.url} className='work__button' target='_blank' rel='noreferrer'>
        Demo
        <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>

    </div>
  )
}

export default WorkItems