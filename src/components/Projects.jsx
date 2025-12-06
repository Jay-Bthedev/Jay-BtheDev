import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

import swimImg from '../assets/swimming.png';
import ecommerceImg from '../assets/Ecommerce.png';
import pepsiImg from '../assets/pepsi.png';
import gameImg from '../assets/colorgame.png';

const projectsData = [
  {
    id: 1,
    title: "Swimming Site",
    desc: "For Swimming Schools",
    img: swimImg,
    link: "https://jay-bthedev.github.io/Full-Website-With-Javascript/"
  },
  {
    id: 2,
    title: "Ecommerce Website",
    desc: "For BeautyStorr",
    img: ecommerceImg, 
    link: "https://jay-bthedev.github.io/E-commerce-website/"
  },
  {
    id: 3,
    title: "Pepsi Site",
    desc: "Website for Pepsi",
    img: pepsiImg , 
    link: "https://jay-bthedev.github.io/Pepsi-Website/"
  },
  {
    id: 4,
    title: "Color Game",
    desc: "Interactive Game",
    img: gameImg, 
    link: "https://jay-bthedev.github.io/Color-Game/index.html"
  }
];

const Projects = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="main-text">
        <p>VIEW MY PROJECTS</p>
        <h2>My Projects</h2>
      </div>

      <div className="portfolio-content">
        {projectsData.map((project) => (
          <div className="row" key={project.id}>
     <div className="project-img-box">
               <img src={project.img} alt={project.title} />
            </div>

            {/* The Overlay Layer */}
            <div className="layer">
              <h5>{project.title}</h5>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;      