import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Creative Thinker</p>
        <a href="#contact" className="btn">Get In Touch</a>
      </div>
    </header>
  );
};

export default Header;