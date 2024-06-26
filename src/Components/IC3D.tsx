// src/components/IC3D.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Model from './Model';

const IC3D: React.FC = () => {
  return (
    <div style={{  }}>
      <Canvas>
        <ambientLight intensity={1.0} /> {/* Increased intensity */}
        <directionalLight position={[10, 10, 10]} intensity={2.0} /> {/* Increased intensity */}
        <pointLight position={[-10, -10, -10]} intensity={1.5} /> {/* Additional light */}
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
};

export default IC3D;
