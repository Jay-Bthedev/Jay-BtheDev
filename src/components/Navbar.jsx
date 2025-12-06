import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; // Import Sun & Moon
import logoImg from '../assets/j-removebg-preview.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for Theme (Default is dark)
  const [theme, setTheme] = useState('dark');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Switch
  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.classList.add('light-mode'); // Adds class to <body>
    } else {
      setTheme('dark');
      document.body.classList.remove('light-mode'); // Removes class
    }
  };

  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>
      <a href="#" className="logo">
        <img src={logoImg} alt="JOBA" className="nav-img" /> JOBA
      </a>

      <ul className={`navlist ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacts</a></li>
      </ul>

      <div className="right-header">
        {/* 👇 THEME TOGGLE BUTTON */}
        <div className="theme-btn" onClick={changeTheme}>
          {theme === 'dark' ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;