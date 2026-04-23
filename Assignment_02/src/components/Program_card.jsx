import React from 'react'
import './Program-card.css'

export default function Program_card({ Title, Degree, ProgramType, duration }) {
  return (
    <div>
      <div className='card-pro'>
          <h2>Title : {Title}</h2>
          <h3>Degree : {Degree}</h3>
          <h3>Program Type : {ProgramType}</h3>
          <h3>Duration : {duration}</h3>
      </div>
    </div>
  )
}
