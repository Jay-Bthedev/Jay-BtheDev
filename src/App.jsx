import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 const [isResumeOpen, setIsResumeOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation timing 
      offset: 100,    
      easing: 'ease-in-out', // Smoothness
      once: false,     // false = animate every time you scroll up/down. true = only once.
    });
  }, []);

  const openModal = () => setIsResumeOpen(true);
  const closeModal = () => setIsResumeOpen(false);

  return (
    <div className="App">
      <Navbar openResume={openModal}  />
      <Hero />
      <Features />
      <Projects />
      <About openResume={openModal} />
      <Contact />
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={closeModal} />
    </div>
  );
}

export default App;