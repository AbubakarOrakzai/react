import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const programs = [
  { id: 1, name: 'BS Computer Science', duration: '4 Years' },
  { id: 2, name: 'BS Data Science', duration: '4 Years' },
  { id: 3, name: 'BS Artificial Intelligence', duration: '4 Years' },
  { id: 4, name: 'BS Informatics', duration: '4 Years' },
  { id: 5, name: 'BS Cyber Security', duration: '4 Years' },
  { id: 6, name: 'MS Computer Science', duration: '2 Years' },
  { id: 7, name: 'MS Artificial Intelligence', duration: '2 Years' },
]

export default function Home() {
  return (
    <div className='home'>

      <section className='hero'>
        <h1>University of Management & Technology</h1>
        <p>Empowering Minds. Transforming Futures. Pakistan's Leading University.</p>
        <Link to='/Programs'>
          <button className='hero-btn'>Explore Programs</button>
        </Link>
      </section>

      <section className='intro'>
        <h2>About UMT</h2>
        <p>
          The University of Management and Technology (UMT) is a premier private university 
          located in Lahore, Pakistan. Established in 1990, UMT has been at the forefront of 
          higher education, offering world-class programs in technology, management, and sciences. 
          With a strong focus on research, innovation, and character development, UMT prepares 
          its graduates to meet the challenges of a rapidly evolving global landscape. 
          The university is home to thousands of students and hundreds of distinguished faculty 
          members who are committed to academic excellence.
        </p>
      </section>

      <section className='highlights'>
        <h2>Program Highlights</h2>
        <p className='highlights-sub'>Explore our world-class programs designed for the future</p>
        <div className='program-cards'>
          {programs.map((program) => (
            <div className='program-card' key={program.id}>
              <h3>{program.name}</h3>
              <p>Duration: {program.duration}</p>
              <Link to='/Programs'>View Details</Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}