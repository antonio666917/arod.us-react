import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="wrapper nav-wrapper">
      <NavLink exact className="nav-logo" activeClassName="inactive" to="/">antoniorodriguez.us</NavLink>
      <ul className="nav">
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">About Me</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;
