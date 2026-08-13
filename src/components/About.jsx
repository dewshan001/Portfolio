import React from 'react';
import { BrainCircuit, Code, Database, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="about" className="about-section section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        About <span className="text-accent">Me</span>
      </motion.h2>
      
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="about-text">
          I'm a third-year Data Science and Artificial Intelligence undergraduate at SLIIT with strong foundations in Machine Learning, Deep Learning, and Python. I build and deploy end-to-end ML pipelines using real-world datasets, with expertise in model optimization, imbalanced classification, and neural networks.
        </p>
        <p className="about-text">
          What fascinates me most is how models learn, from classical algorithms to neural networks to modern architectures. I'm driven by experimentation, iteration, and delivering production-ready ML solutions with measurable business impact. Currently seeking internships in ML Engineering, AI Development, or Data Science.
        </p>
      </motion.div>

      <motion.div 
        className="about-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="about-card glass-panel liquid-effect">
          <BrainCircuit size={40} className="text-accent card-icon" />
          <h3>AI / ML</h3>
          <p>End to end pipelines</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="about-card glass-panel liquid-effect">
          <Code size={40} className="text-accent card-icon" />
          <h3>Python</h3>
          <p>Production-grade code</p>
        </motion.div>

        <motion.div variants={itemVariants} className="about-card glass-panel liquid-effect">
          <Rocket size={40} className="text-accent card-icon" />
          <h3>Deployment</h3>
          <p>Interactive web apps</p>
        </motion.div>

        <motion.div variants={itemVariants} className="about-card glass-panel liquid-effect">
          <Database size={40} className="text-accent card-icon" />
          <h3>Databases</h3>
          <p>SQL & NoSQL Solutions</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
