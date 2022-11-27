import React from 'react';
import './Card.css';

const Card = ({id, image, title, subtitle}) => {
  return (
    <article id={id} key={id}
    className="card-container"
        >
        <div className="card-image-container">
            <img className="card-image" src={image}/>
        </div>
        {title && <h4 className="card-title">{title}</h4>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
    </article>
  )
}

export default Card