import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        <div className='footer-brand'>
          <img src="https://www.umt.edu.pk/images/umt-logo.png" alt="UMT Logo" className='footer-logo' />
          <p className='footer-tagline'>University of Management <br /> and Technology</p>
          <p className='footer-hashtag'>#myUMT</p>
        </div>

        <div className='footer-col'>
          <h4>About</h4>
          <ul>
            <li>Vision and Mission</li>
            <li>UMT at a Glance</li>
            <li>International Linkages</li>
            <li>Milestones</li>
            <li>Accreditations</li>
            <li>Memberships</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>Study at UMT</h4>
          <ul>
            <li>Undergraduate Programs</li>
            <li>Graduate Programs</li>
            <li>PhD Programs</li>
            <li>Associate Degree Programs</li>
            <li>International Students</li>
            <li>Apply Online</li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>On Campus</h4>
          <ul>
            <li>Club and Societies</li>
            <li>Facilities</li>
            <li>Sustainable Development Initiative</li>
            <li>Report for Harassment</li>
            <li>Explore UMT In Metaverse</li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>Research</h4>
          <ul>
            <li>Journals</li>
            <li>Conferences</li>
            <li>Professional Centers</li>
            <li>E-learning</li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>Life at UMT</h4>
          <ul>
            <li>News</li>
            <li>Events</li>
            <li>Events Gallery</li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4>Resources</h4>
          <ul>
            <li>Faculty and Staff</li>
            <li>Student Resources</li>
            <li>Faculty Directory</li>
          </ul>
          <div className='footer-socials'>
            <span>in</span>
            <span>tw</span>
            <span>fb</span>
            <span>ig</span>
            <span>yt</span>
          </div>
        </div>

      </div>
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} University of Management and Technology. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
   
