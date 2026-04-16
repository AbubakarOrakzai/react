import React from 'react';
import './Card.css';

function Card({ name, description, imageUrl }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
    </div>
  );
}

export default Card;