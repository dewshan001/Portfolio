import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Programming & Web",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "XML", "JavaFX", "OOP", "C#", "C++", "Dart"]
  },
  {
    title: "Data & AI / ML",
    skills: ["Pandas", "R", "TensorFlow", "Scikit-learn", "Neural Networks", "Random Forest"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "React Native", "Expo", "Postman", "Spring Boot", "Node.js", "Git", "GitHub"]
  },
  {
    title: "Databases",
    skills: ["MSSQL", "SQL", "MongoDB", "SQLite", "PostgreSQL"]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills-section section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical <span className="text-accent">Skills</span>
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={cardVariants} className="skill-category glass-panel liquid-effect">
            <h3 className="category-title text-accent">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
