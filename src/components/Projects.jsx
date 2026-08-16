import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsList = [
  {
    title: "Web-Based Agriculture Community Management",
    date: "Feb 2026 - Mar 2026",
    description: "AI-based platform connecting farmers with experts, featuring an AI chatbot and image-analysis for crop leaf disease detection. Includes comprehensive admin modules.",
    tech: ["Python", "React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/SupunThk/Agrolink.git",
    demo: "#"
  },
  {
    title: "Machine Learning Models for Prediction",
    date: "Oct 2025 - Dec 2025",
    description: "Applied Neural Network and Random Forest algorithms to classify lung cancer data. Performed data analysis, preprocessing, and evaluated model performance.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
    github: "https://github.com/IT24103014/2025_Y2_S1_KUR_07",
    demo: "#"
  },
  {
    title: "Web-Based Laundry Management System",
    date: "Jun 2025 - Jul 2025",
    description: "Comprehensive management platform featuring user management, payment simulation, staff management, and laundry tracking.",
    tech: ["Java", "Spring Boot", "MSSQL", "JavaScript"],
    github: "https://github.com/dewshan001/Laundry-Management-System.git",
    demo: "#"
  },
  {
    title: "Movie Ticket Booking System",
    date: "Feb 2025 - Apr 2025",
    description: "Full-stack online movie ticket booking platform with seat reservation, session management, and payment simulation.",
    tech: ["Java", "Spring Boot", "JavaScript", "HTML/CSS"],
    github: "https://github.com/chamith2435/OOP-Project-Group-6",
    demo: "#"
  },
  {
    title: "EduHub - Gamified Learning Platform",
    date: "June 2025 - September 2025",
    description: "A comprehensive educational platform with gamified learning, interactive quizzes, and progress tracking, built for enhanced student engagement.",
    tech: ["React Native", "Expo Router", "React Hooks", "Node.Js", "MongoDB"],
    github: "https://github.com/Vishwa633/EduHub",
    demo: "#"
  },
  {
    title: 'EcoManage - Smart Garbage Management System',
    date: 'August 2025 - September 2025',
    description: 'A comprehensive garbage management system that connects garbage collectors with residents, featuring a smart garbage bin tracking system and a waste management dashboard.',
    tech: ['React', 'Node.js', 'SQLite'],
    github: 'https://github.com/SupunThk/EcoManage.git',
    demo: '#'
  },
  {
    title: 'EcoManage - Mobile Application',
    date: 'August 2026 - September 2026',
    description: 'A mobile application that connects garbage collectors with residents, featuring a smart garbage bin tracking system and a waste management dashboard.',
    tech: ['React Native', 'Expo Router', 'Node.Js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/dewshan001/EcoManage_App',
    demo: '#'
  },
  {
    title: 'NexusHealth - Small Clinic Management System',
    date: 'October 2025 - November 2025',
    description: 'A comprehensive clinic management system that connects doctors with patients, featuring a smart appointment scheduling system and a patient management dashboard.',
    tech: ['Java', 'HTML', 'CSS', 'Java', 'MSSQL'],
    github: 'https://github.com/dewshan001/NexusHealth.git',
    demo: '#'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="projects-section section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-accent">Projects</span>
      </motion.h2>
      <motion.p
        className="projects-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Innovative solutions with real-world applications & intelligent algorithms
      </motion.p>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsList.map((project, index) => (
          <motion.div key={index} variants={projectVariants} className="project-card glass-panel liquid-effect">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date text-accent">{project.date}</span>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              <a href={project.github} className="btn-project btn-github">
                <FaGithub size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
