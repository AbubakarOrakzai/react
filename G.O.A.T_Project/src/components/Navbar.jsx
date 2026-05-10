import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar()
{
    return(
      <div>
          <div className="continar" style={{ borderRadius:"20px",   backgroundColor:"#1e3a8a", color:"white", display:"flex", justifyContent:"space-between", flexDirection:"rows",alignItem:"center"}}>
            <h1 style={{padding:"40px"}}>My <span style={{color:"red"}}>Company</span></h1>
            <ul style={{listStyle:"none", display:"flex", gap :"10px", padding:"40px", alignItem:"center"}}>
                <li><Link to="/home" style={{color:"white", textDecoration:"none"}}>Home</Link></li>
                <li><Link to="/about" style={{color:"white", textDecoration:"none"}}>About</Link></li>
                <li><Link to="/contact" style={{color:"white", textDecoration:"none"}}>Contact</Link></li>
            </ul>
          </div>
      </div>
    )
}