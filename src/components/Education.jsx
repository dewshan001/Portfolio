import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", bounce: 0.4 }
    }
  };

  return (
    <section id="education" className="education-section section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education & <span className="text-accent">Certifications</span>
      </motion.h2>

      <div className="education-content">
        <motion.div 
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="timeline-item glass-panel liquid-effect">
            <div className="timeline-icon bg-accent">
              <GraduationCap size={24} color="#000" />
            </div>
            <div className="timeline-content">
              <h3>BSc (Hons) in Information Technology, Specializing in AI</h3>
              <p className="institution">Sri Lanka Institute of Information Technology (SLIIT)</p>
              <span className="date text-accent">2024 - Present</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="timeline-item glass-panel liquid-effect">
            <div className="timeline-icon bg-accent">
              <GraduationCap size={24} color="#000" />
            </div>
            <div className="timeline-content">
              <h3>ICT Technician, NVQ Level 4</h3>
              <p className="institution">National Youth Services Council</p>
              <span className="date text-accent">2023 - 2024</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="timeline-item glass-panel liquid-effect">
            <div className="timeline-icon bg-accent">
              <GraduationCap size={24} color="#000" />
            </div>
            <div className="timeline-content">
              <h3>G.C.E. Advanced Level</h3>
              <p className="institution">Ku/ Pothubowa College</p>
              <span className="date text-accent">2022 - 2023</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="certifications-list"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="certification-item glass-panel liquid-effect">
            <Award size={32} className="text-accent cert-icon" />
            <div>
              <h3>Certificate in AI/ML Engineer - SLIIT (Stage 1)</h3>
              <span className="date text-accent">2026</span>
              <a href="https://code.sliit.org/certificates/s2u1kfl68e" target="_blank" rel="noopener noreferrer" className="cert-link">View Credential</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
