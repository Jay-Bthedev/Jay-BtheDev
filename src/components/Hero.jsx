import React, { useState } from 'react';
import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaTwitter, FaTelegram, FaEnvelope, FaLinkedin } from 'react-icons/fa';



import img1 from '../assets/j-removebg-preview.png'; 
import img2 from '../assets/joba_image-removebg-preview.png'; 
const Hero = () => {
  const [currentImg, setCurrentImg] = useState(img1);

  return (
    <section className="home" id="home">
      <div className="home-text">
        <div className="slide">
          <span className="one">Hi, I'm</span>
        </div>
        
        {/* Typewriter Effect */}
        <h1 className="typewriter-text">
          <TypeAnimation
            sequence={[
              'Jesujoba',
              2000,
              () => setCurrentImg(img2), // Switch to 2nd image
              'Jay-Bthedev',
              2000,
              () => setCurrentImg(img1), // Switch back to 1st image
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <h2>a Front-end Developer</h2>
        <p>
          Passionate about building smooth, interactive, and visually striking digital experiences.
          I turn ideas into responsive, user-friendly interfaces that look great on any screen.
        </p>

        <div className="socials">
            <a href="mailto:jobaayoola@gmail.com"><FaEnvelope /></a>
            <a href="https://x.com/OracleX_126" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://t.me/OracleX_on_TG" target="_blank" rel="noreferrer"><FaTelegram /></a>
            <a href="https://github.com/jay-bthedev" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>

        <a href="#contact" className="btn">Let's Chat</a>
      </div>

      <div className="home-img">
        <div className="img-box">
        <img 
          src={currentImg} 
          alt="Profile" 
          className="profile-img fade-effect"
          // This key trick restarts the CSS animation when image changes
          key={currentImg} 
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;