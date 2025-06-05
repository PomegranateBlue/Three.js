import * as THREE from 'three';
import { useRef } from 'react';
import { MeshProps } from '@react-three/fiber';

export default function Character(props: MeshProps) {
  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref as any} {...props} position={[0, 1, 0]}>
      <boxGeometry args={[0.5, 1, 0.5]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
