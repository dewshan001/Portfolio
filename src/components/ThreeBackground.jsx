import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const AbstractGeometry = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base slow rotation
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.08;
      
      // Scroll-based 3D rotation effect
      const scrollY = window.scrollY;
      meshRef.current.rotation.x = scrollY * 0.001;
      meshRef.current.rotation.y += (scrollY * 0.0005 - meshRef.current.rotation.y) * 0.1;
      
      // Gentle parallax effect on mouse move
      const mouseX = (state.pointer.x * Math.PI) / 6;
      const mouseY = (state.pointer.y * Math.PI) / 6;
      
      meshRef.current.rotation.x += (mouseY - meshRef.current.rotation.x) * 0.08;
      meshRef.current.rotation.y += (mouseX - meshRef.current.rotation.y) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      {/* Parameters: radius, tube, tubularSegments, radialSegments, p, q */}
      <torusKnotGeometry args={[9, 1.5, 300, 20, 3, 4]} />
      <meshBasicMaterial 
        color="#06b6d4" 
        wireframe={true} 
        transparent={true} 
        opacity={0.2} 
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, background: '#020617', isolation: 'isolate' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#020617', 10, 25]} />
        <AbstractGeometry />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
