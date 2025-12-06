 import React from 'react';
import Navbar from './components/Navbar'; // <--- CHANGED THIS LINE (Added /components/)
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects'; 
import About from './components/About';       
import Contact from './components/Contact';   
import Footer from './components/Footer';
import './App.css'; 

function App() {
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