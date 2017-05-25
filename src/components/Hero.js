import React from 'react';
import './Hero.css';

import ProfilePicture from '../images/profilepictures/darkness.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">

        <div className="hero_image">
          <img src={ProfilePicture} alt="man with a chill face" />
        </div>

        <div className="hero_text">
          <h1>Hello! I'm a <strong>software engineer</strong> working as the <strong>lead technologist</strong> in a <strong>digital marketing</strong> <a href="https://m8agency.com" target="_blank" rel="noopener noreferrer" title="M8">agency</a>.</h1>
        </div>

      </div>
    </section>
  )
}

export default Hero;
