import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBriefcase, FaEnvelope, FaFilePdf, FaLaptop, FaCamera} from 'react-icons/fa';
import './Home.css';

const terminalText = [
  "Initializing system...",
  "Loading profile...",
  "Accessing user data...",
  "Welcome, Ahnaf Inkiad",
  "System Ready."
];

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < terminalText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + terminalText[index] + "\n");
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="home">
      <div className="animated-background">
        <div className="gradient-overlay"></div>
        <div className="floating-icons">
          <FaLaptop className="icon floating laptop" />
          <FaCamera className="icon floating camera" />
          <FaCode className="icon floating code" />
        </div>
      </div>

      <motion.div className="home-content-container">
        <motion.div className="terminal-window" initial="hidden" animate="visible">
          <pre className="terminal-text">
            {displayedText}
            {showCursor && "_"}
          </pre>
          <motion.div className="home-buttons">
            <a href="#projects" className="home-button">
              <FaCode className="icon" /> Projects
            </a>
            <a href="#experience" className="home-button">
              <FaBriefcase className="icon" /> Experience
            </a>
            <a href="#contact" className="home-button">
              <FaEnvelope className="icon" /> Contact
            </a>
            <a href="/Ahnaf_Inkiad_Resume.pdf" target="_blank" rel="noopener noreferrer" className="home-button">
              <FaFilePdf className="icon" /> Resume
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
