import React from 'react';
import './Header.css';
import collegeLogo from '../images/logo.png';
const Header = () => {
  return (
    <div className="header">
      <img src={collegeLogo} alt="College Logo" className="logo" />
      <h1>Campus Navigation System-IIT Dharwad</h1>
    </div>
  );
};

export default Header;
