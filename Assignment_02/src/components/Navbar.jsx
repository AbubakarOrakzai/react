import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img 
          src="https://www.umt.edu.pk/images/umt-logo.png" 
          alt="UMT Logo" 
          className='logo-img' 
        />
      </div>
      <div className='navbar-links'>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to='/Programs'>Programs</NavLink>
        <NavLink to='/Admission'>Admission</NavLink>
        <NavLink to='/Faculty'>Faculty</NavLink>
      </div>
    </div>
  )
}

export default Navbar