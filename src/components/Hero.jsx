import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltImage from './TiltImage';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="hero-subtitle text-accent">AI/ML ENGINEER & FULLSTACK DEVELOPER</h3>
        <h1 className="hero-title">
          Hi, I'm <span className="text-accent">Dewshan Gunawardhana</span>
        </h1>
        <h2 className="hero-role">
          Aspiring AI/ML Engineer & Undergraduate
        </h2>
        <p className="hero-description">
          Enthusiastic third-year undergraduate specializing in Artificial Intelligence. Focused on acquiring hands-on professional experience and deepening technical skills through practical project work. Active team contributor with a track record of delivering innovative software projects.
        </p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href="#projects" className="btn btn-primary bg-accent liquid-effect">View Projects</a>
          <a href="/Dewshan_Gunawardhana_Resume.pdf" download className="btn btn-secondary glass-panel liquid-effect">
            <Download size={18} /> Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      >
        <TiltImage src="/profile.jpg" alt="Dewshan Gunawardhana" />
      </motion.div>
    </section>
  );
};

export default Hero;
