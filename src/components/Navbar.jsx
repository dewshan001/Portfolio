import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setHidden(true); // Hide when scrolling down
    } else {
      setHidden(false); // Show when scrolling up
    }
  });

  return (
    <motion.nav 
      className="navbar-liquid"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="liquid-glass-panel">
        <div className="nav-brand">
          <span className="text-accent">Dewshan</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
