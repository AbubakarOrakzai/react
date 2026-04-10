import React from 'react';
import './card.css';
import AbubakarOrakzai from '../assest/AbubakarOrakzai.jpg';

function Card({name, profession, description, image}) {
  return (
    <div>
      <div className="parent">
        <div className="card">
          <div className="top">
            <img src={image} alt="Profile" />
          </div>

          <div className="center">
            <h2>{name}</h2>
            <h2>{profession}</h2>
            <p>
              {description}
            </p>
          </div>

          <div className="bottom">
            <button>Subscribe</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;