import React from 'react';
import './Hero.css';

import ProfilePicture from '../images/profilepictures/2.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">

        <div className="hero_image">
          <img src={ProfilePicture} alt="man with a chill face" />
        </div>

        <div className="hero_text">
          <h2>Hello! I'm a <strong>software engineer</strong> working as the <strong>lead technologist</strong> in a <strong>digital marketing</strong> agency.</h2>
        </div>

      </div>
    </section>
  )
}

export default Hero;
