
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';



type ModelProps = {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
};

const Model: React.FC<ModelProps> = (props) => {
  const { scene } = useGLTF('src/assets/IC you.glb') as { scene: Group };
  return <primitive object={scene} {...props} />;
};

export default Model;
