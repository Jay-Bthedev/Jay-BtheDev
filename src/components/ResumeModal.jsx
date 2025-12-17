import React from 'react';
import './ResumeModal.css';
import { FaTimes, FaDownload, FaUniversity, FaBriefcase, FaCode, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-modal-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <h2>Ayoola Jesujoba</h2>
          <p>Front-End Developer & UI/UX Specialist</p>
          <span className="location">Ibadan, Nigeria</span>
          
          {/* Open to Work Badge */}
          <div className="status-badge">
            <FaCheckCircle /> Open to: Full-time, Remote, Freelance & Internships
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="modal-body">
          
          {/* Section: Summary */}
          <div className="modal-section">
            <p className="summary-text">
              <strong>Aptech Certified</strong> Developer proficient in <strong>React, jQuery, and UI/UX Design</strong>. 
    I build pixel-perfect, responsive applications. I am a versatile developer ready to add value 
    to any team, building <strong>scalable web applications and digital solutions</strong>.
            </p>
          </div>

          {/* Section: Skills */}
          <div className="modal-section">
            <h3><FaCode className="icon" /> Technical Proficiency</h3>
            <div className="skills-grid">
              <span>React.js</span>
              <span>jQuery</span>
              <span>UI/UX Design</span>
              <span>JavaScript (ES6+)</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
            </div>
          </div>

          {/* Section: Education */}
          <div className="modal-section">
            <h3><FaUniversity className="icon" /> Education & Certs</h3>
            <div className="modal-item">
              <h4>Ladoke Akintola University of Technology (LAUTECH)</h4>
              <p>B.Tech Computer Science</p>
            </div>
            <div className="modal-item">
              <h4>Aptech Computer Education</h4>
              <p>Certified Software Professional (ACSP)</p>
            </div>
          </div>

          {/* Section: Experience */}
          <div className="modal-section">
            <h3><FaBriefcase className="icon" /> Professional Experience</h3>
            <div className="modal-item">
              <h4>Freelance Developer & UI Designer</h4>
              <p>Delivering responsive websites, e-commerce interfaces, and landing pages using React and jQuery.</p>
            </div>
            <div className="modal-item">
              <h4>Technical Community Manager</h4>
              <p>Driving growth and providing technical support for tech communities.</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a href="/Resume.pdf" download="Ayoola_Jesujoba_Resume.pdf" className="download-btn">
            <FaDownload /> Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;