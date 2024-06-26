// src/components/Model.tsx
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
  const { scene } = useGLTF('src/assets/IC you.glb');

  useEffect(() => {
    console.log('Model loaded:', scene);
  }, [scene]);
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} />;

};

export default Model;