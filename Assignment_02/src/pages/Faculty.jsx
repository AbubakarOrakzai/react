import React from 'react'
import './Faculty.css'

const faculty = [
  {
    id: 1,
    name: 'Noaman Saleem',
    designation: 'Professor',
    expertise: 'School of Systems and Technology Department of Computer Science',
    image: 'https://admin.umt.edu.pk/Media/UserProfile/638859490298404074840.jpg',
  },
  {
    id: 2,
    name: 'Muhammad Imran Shafi',
    designation: 'Associate Professor',
    expertise: 'School of Systems and Technology Department of Computer Science',
    image: 'https://admin.umt.edu.pk/Media/UserProfile/638859381935085459508.jpg',
  },
  {
    id: 3,
    name: 'Dr Malik Tahir Hassan',
    designation: 'Dean School of Systems and Technology Professor',
    expertise: 'Data Science & Big Data Analytics',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 4,
    name: 'Dr Atif Alvi',
    designation: 'Professor',
    expertise: 'Software Engineering & Cloud Computing',
    image: 'https://admin.umt.edu.pk/Media/UserProfile/638859339815750032575.jpg',
  },
 
]

export default function Faculty() {
  return (
    <div className='faculty'>

      <div className='faculty-hero'>
        <h1>Our Faculty</h1>
        <p>Meet the dedicated minds shaping the future of technology at UMT</p>
      </div>

      <div className='faculty-container'>
        <div className='faculty-grid'>
          {faculty.map((member) => (
            <div className='faculty-card' key={member.id}>
              <img src={member.image} alt={member.name} className='faculty-img' />
              <div className='faculty-info'>
                <h3>{member.name}</h3>
                <p className='designation'>{member.designation}</p>
                <p className='expertise'>{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}