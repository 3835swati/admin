/* Nav.js */
/* eslint-disable react/prop-types */


import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({ Icon, title, link, isSubroutesVisible, subroutes, onClick }) => {
  return (
    <div className={`nav ${isSubroutesVisible ? 'active' : ''}`} onClick={onClick}>
      <Link to={link}>
        <div className='title-container'>
          {Icon && <Icon className='icon' />}
          <h2>{title}</h2>
        </div>
      </Link>
      {isSubroutesVisible && subroutes && subroutes.length > 0 && (
        <ul className='subroutes'>
          {subroutes.map((subroute, index) => (
            <Link key={index} to={subroute.link}>
              <li className='subroute-item'>
                {subroute.icon && (
                  <span className='subroute-icon'>{subroute.icon}</span>
                )}
                {subroute.text}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
