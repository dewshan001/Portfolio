import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content section-container">
        <motion.h2 
          className="footer-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's <span className="text-accent">Connect</span>
        </motion.h2>
        <motion.p 
          className="footer-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Open to opportunities, collaborations, and conversations about AI/ML.
        </motion.p>
        
        <motion.div 
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {[
            { href: "mailto:dewshangunawardhana@gmail.com", icon: <Mail size={24} className="text-accent" />, text: "dewshangunawardhana@gmail.com" },
            { href: "tel:0759082176", icon: <Phone size={24} className="text-accent" />, text: "0759082176" },
            { href: "https://linkedin.com/in/dewshan1", icon: <FaLinkedin size={24} className="text-accent" />, text: "linkedin.com/in/dewshan1" },
            { href: "https://github.com/dewshan001", icon: <FaGithub size={24} className="text-accent" />, text: "github.com/dewshan001" }
          ].map((item, index) => (
            <motion.a 
              key={index}
              href={item.href} 
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="contact-link glass-panel liquid-effect"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dewshan Gunawardhana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
