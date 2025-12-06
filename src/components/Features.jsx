import React from 'react';
import './Features.css';
import { FaCode, FaLayerGroup, FaRocket, FaMobileAlt, FaLaptopCode, FaCogs } from 'react-icons/fa';

const featuresData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Modern, scalable web interfaces",
    desc: "I build responsive, pixel-perfect web interfaces using React.js and modern CSS frameworks. My interfaces improve usability and load times."
  },
  {
    id: 2,
    icon: <FaLayerGroup />,
    title: "Decentralized systems & automation",
    desc: "I develop smart contracts and Web3 integrations using Solidity and Web3.js, helping reduce manual processes through automation."
  },
  {
    id: 3,
    icon: <FaRocket />, // Fixed typo from Farocket
    title: "Speed & scalability optimization",
    desc: "I optimize applications for speed by improving performance bottlenecks, reducing bundle sizes, and efficient state management."
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: "Intuitive, user-first design",
    desc: "I design clean, user-focused interfaces that improve user flow and engagement through better layout structure and UX refinements."
  },
  {
    id: 5,
    icon: <FaMobileAlt />,
    title: "Cross-platform mobile experiences",
    desc: "I develop progressive web apps (PWAs) and mobile-friendly applications that deliver near-native experiences."
  },
  {
    id: 6,
    icon: <FaCogs />,
    title: "Reliable dev support & strategy",
    desc: "I provide technical guidance, code reviews, and maintenance that improve website stability and performance."
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="main-text">
        <p>FEATURES</p>
        <h2>What I Do</h2>
      </div>

      <div className="features-content">
        {featuresData.map((feature) => (
          <div className="box" key={feature.id}>
            <div className="icon-box">
                {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;