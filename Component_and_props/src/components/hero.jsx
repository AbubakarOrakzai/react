import React from 'react'
import './hero.css'
function Hero() {
    const handleClick = () => {
        alert('Card is on the way')
    }

  return (
      <>
      <div className='hero'>
      <div className='description'>
        <h1>Put people first</h1>
        <p>fast user friendly and enganing turn HR into
         people and culture and steamline you daily 
         operations with own branded app.
        </p>
        <button className='bnt' onClick={handleClick}>
          Get card
        </button>
      </div>
      <div className='hero-img'>
        <img src="https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/04/12164406/Graphic-card.jpg" alt="" />
      </div>
      </div>
        </>
  )
}

export default Hero