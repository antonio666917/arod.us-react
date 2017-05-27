import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">

        <div className="footer_credits">
          <h5>Antonio Rodríguez</h5>
          <h6>software engineering &#9737; web development &#9991; digital marketing &#9862; technology</h6>
        </div>

        <div className="footer_social">
          <SocialLinks />
        </div>

      </div>
    </footer>
  )
}

function SocialLinks() {
  return (
    <ul className="social_links">
      <li>
        <a href="https://www.linkedin.com/in/antoniwan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/antoniwan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github-alt fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/antoniwan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/antoniwan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="http://instagram.com/antoniwan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="http://www.last.fm/user/antoniwan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-lastfm fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="mailto:antoniwan@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope fa-2x"></i>
        </a>
      </li>
    </ul>
  )
}

export default Footer;
