import React from 'react';
import './About.css';

import profileImg from '../assets/joba image.png';
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={profileImg} alt="About Me" />
      </div>

      <div className="about-text">
       
        <h5>ABOUT ME</h5>

       
        <h2>Front-End Developer & <br /> Web3 Enthusiast</h2>

        <p>
          Hi, I’m Ayoola Jesujoba Christopher, a Front-End Developer based in Nigeria. 
          I build responsive, modern, and user-friendly web experiences using HTML, CSS, JavaScript, and React. 
          I enjoy turning ideas into clean interfaces that look good and work smoothly on every device.
          <br /><br />
          Aside from Web2, I’m also active in Web3. I’ve worked with communities and content across crypto projects.
          I’m open to remote roles, freelance jobs, internships, and collaborations.
        </p>

        <a href="#" className="btn">Download CV</a>
      </div>
    </section>
  );
};

export default About;











