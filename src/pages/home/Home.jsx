import React from 'react';
import arnau from '../../assets/img/Arnau-5.png';
import blob from '../../assets/img/blob.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
          <img className="home-forefront-image" alt="arnau" src={arnau} />
          <div className="home-background">
            <img className="home-background-image" alt="blob" src={blob} />
          </div>
    </div>
  )
}

export default Home;