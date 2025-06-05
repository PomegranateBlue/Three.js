import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Character from './Character';

export default function CanvasArea() {
  return (
    <Canvas className="w-full h-full bg-gray-800">
      <Suspense fallback={null}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <Character />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
