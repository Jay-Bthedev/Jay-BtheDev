import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>All rights reserved &copy; 2026 by JayB-thedev</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><FaGithub /></a>
        <a href="#home"><FaTwitter /></a>
        <a href="#home"><FaTelegram /></a>
      </div>
    </footer>
  );
};

export default Footer;