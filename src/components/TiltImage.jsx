import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './TiltImage.css';

const TiltImage = ({ src, alt }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Increase stiffness for snappier 3D feel
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Exaggerated rotation for the card
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  // Dynamic holographic glare based on mouse Y position
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.6]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      className="tilt-container"
    >
      {/* Background glowing shadow */}
      <div className="tilt-shadow" style={{ transform: "translateZ(-30px)" }}></div>
      
      {/* Main image card */}
      <div className="tilt-inner" style={{ transform: "translateZ(40px)" }}>
        <img src={src} alt={alt} className="tilt-image" />
        
        {/* Holographic interactive glare */}
        <motion.div 
          className="tilt-glare"
          style={{
            opacity: glareOpacity,
            y: glareY
          }}
        />
      </div>
    </motion.div>
  );
};

export default TiltImage;
