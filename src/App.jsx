import React, { useEffect } from 'react'; // 1. Import useEffect
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 1200, // How long the animation lasts 
      offset: 100,    // Trigger animation 100px before element is visible
      easing: 'ease-in-out', // Smoothness
      once: true,     // false = animate every time you scroll up/down. true = only once.
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;