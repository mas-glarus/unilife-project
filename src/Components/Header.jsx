import React, { useState } from 'react';
import '../styles/Header.css?v=1';
import { Link } from 'react-router-dom';
import { FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/Ai';
import logo from '../assets/UniLife.png';
import vector from '../assets/Vector.svg';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" >
      <div className="logo">
        <Link to="/">
          <img className="vector" src={vector} alt="Logo" />
          <img className="logo-text"src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="actions" >
        <button className="shortlist">
          <AiOutlineHeart /> <span>Shortlist</span>
        </button>
        <Link to="/contact" className="contact-us">
          <FaRegEnvelope/> <span>Contact Us</span>
        </Link>
      </div>
      <input type="checkbox" id="hamburger" checked={isOpen} onChange={handleToggle} className="hamburger-checkbox" />
      <label htmlFor="hamburger" className="hamburger" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-dropdown">
          <div className='mobile-nav'>
            <Link to="/">Home</Link>
            <Link to="/all-cities">All Cities</Link>
          </div>
          <div className='favourites'>
            <button className="shortlist">
              <AiOutlineHeart /> <span>Shortlist</span>
            </button>
            <Link to="/contact" className="contact-us">
              <FaRegEnvelope /> <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
