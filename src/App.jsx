import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
