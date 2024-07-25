import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="sidebar">
      <ul>
        <li><button onClick={() => onNavigate('home')}>Home</button></li>
        <li><button onClick={() => onNavigate('about')}>About</button></li>
        <li><button onClick={() => onNavigate('contact')}>Contact</button></li>
        <li><button onClick={() => onNavigate('maps')}>Map</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
