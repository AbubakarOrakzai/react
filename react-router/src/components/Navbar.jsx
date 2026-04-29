import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <h1>hello</h1>
        <ul>
          <li> 
             <Link to='/' >Home</Link>
          </li>
          <li>    <Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
