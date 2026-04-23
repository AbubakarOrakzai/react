import React from 'react'
import Program_card from '../components/Program_card'
import './Program.css'

export default function Programs() {
   
  const data = [
    {
      Title: 'BS Computer Science',
      Degree: 'Undergraduate Programs',
      ProgramType: 'Morning',
      duration: '4 Years',
    },
    {
      Title: 'BS Data Science',
      Degree: 'Undergraduate Program',
      ProgramType: 'Morining',
      duration: '4 Years',
    },
    {
      Title: 'BS Artificial Intelligence',
      Degree: 'Undergraduate Program',
      ProgramType: 'Morning',
      duration: '4 Years',
    },
    {
      Title: 'BS Informatics',
      Degree: 'undergraduate Program',
      ProgramType: 'Morning',
      duration: '4 Years',
    },
    {
      Title: 'BS Cyber Security',
      Degree: 'undergraduate Program',
      ProgramType: 'Morning',
      duration: '4 Years',
    },
    {
      Title: 'Ms Computer Science',
      Degree: 'Graduate Program',
      ProgramType: 'Weekend',
      duration: '2 Years',
    },
       {
      Title: 'Ms Artificial Intelligence',
      Degree: 'Graduate Program',
      ProgramType: 'Weekend',
      duration: '2 Years',
    },



  ]
  
  return (
    <div className="programs-container">
      <div className="cards-row">
        {data.map((item, index) => (
          <Program_card
            key={index}
            Title={item.Title}
            Degree={item.Degree}
            ProgramType={item.ProgramType}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  )
}