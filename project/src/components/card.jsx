import React from 'react';
import './card.css';
import AbubakarOrakzai from '../assest/AbubakarOrakzai.jpg';

function Card() {
  return (
    <div>
      <div className="parent">
        <div className="card">
          <div className="top">
            <img src={AbubakarOrakzai} alt="Profile" />
          </div>

          <div className="center">
            <h2>Abubakar Orakzai</h2>
            <h2>Software Engineer</h2>
            <p>
              Experienced developer with a passion for creating modern and
              user-friendly applications.
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