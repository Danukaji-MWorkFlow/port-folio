import React, { useState, useEffect } from 'react';

const LightWave: React.FC = () => {
  const [lightX, setLightX] = useState(0);

  const animateLight = () => {
    // Calculate new position (e.g., move from 0 to 1)
    const newPosition = (lightX + 0.005) % 1;
    setLightX(newPosition);

    // Request next frame
    requestAnimationFrame(animateLight);
  };

  useEffect(() => {
    // Start animation loop
    requestAnimationFrame(animateLight);
  }, []);

  return (
    <pointLight position={[lightX, 1, 0]} intensity={10} />
  );
};

export default LightWave;
