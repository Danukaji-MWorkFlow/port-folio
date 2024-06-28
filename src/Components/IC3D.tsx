import { Canvas } from '@react-three/fiber';
import Model from './Model';



const IC3D: React.FC = () => {

  return (
    <Canvas >
      <ambientLight intensity={1} />
      <directionalLight color={"white"} intensity={0.02} position={[0.8, 0, 1]} />
      <directionalLight color={"white"} intensity={0.03} position={[0.7, 0, 1]} />
      <directionalLight color={"white"} intensity={0.04} position={[0.6, 0, 1]} />
      <directionalLight color={"white"} intensity={0.05} position={[0.5, 0, 1]} />
      <directionalLight color={"white"} intensity={0.06} position={[0.4, 0, 1]} />
      <directionalLight color={"white"} intensity={0.07} position={[0.3, 0, 1]} />
      <directionalLight color={"white"} intensity={0.08} position={[0.2, 0, 1]} />
      <directionalLight color={"white"} intensity={0.09} position={[0.1, 0, 1]} />
      <directionalLight color={"white"} intensity={0.1} position={[0, 0, 1]} />
      <directionalLight color={"white"} intensity={0.09} position={[-0.2, 0, 1]} />
      <directionalLight color={"white"} intensity={0.08} position={[-0.3, 0, 1]} />
      <directionalLight color={"white"} intensity={0.07} position={[-0.4, 0, 1]} />
      <directionalLight color={"white"} intensity={0.06} position={[-0.5, 0, 1]} />
      <directionalLight color={"white"} intensity={0.05} position={[-0.6, 0, 1]} />
      <directionalLight color={"white"} intensity={0.04} position={[-0.7, 0, 1]} />
      <directionalLight color={"white"} intensity={0.03} position={[-0.8, 0, 1]} />
      <directionalLight color={"white"} intensity={0.02} position={[-0.9, 0, 1]} />


        <Model position={[0, 0, 0]} rotation={[-Math.PI / 2, -Math.PI, Math.PI]} scale={[2.5, 2.5, 2.5]} />
    </Canvas>
  );
};


export default IC3D;