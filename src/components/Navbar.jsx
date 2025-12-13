import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logoImg from '../assets/j-removebg-preview.png'; 

// 👇 1. ADD THIS inside the curly brackets
const Navbar = ({ openResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  // ... (Your existing scroll and theme functions stay here) ...
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.classList.add('light-mode');
    } else {
      setTheme('dark');
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>
      <a href="#" className="logo">
        <img src={logoImg} alt="JOBA" className="nav-img" /> JOBA
      </a>

      <ul className={`navlist ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#features" onClick={closeMenu}>Services</a></li>
        
        {/* 👇 2. UPDATE THE RESUME LINK HERE */}
        <li>
            <a href="#" onClick={(e) => {
                e.preventDefault(); // Stop page from jumping
                openResume();       // Open the popup
                closeMenu();        // Close mobile menu
            }}>Resume</a>
        </li>

        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacts</a></li>
      </ul>

      <div className="right-header">
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