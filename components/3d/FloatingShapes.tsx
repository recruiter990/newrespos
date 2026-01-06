"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function FloatingCube({ position }: { position: Vector3 }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position.y + Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#6366F1"
        emissive="#6366F1"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function FloatingSphere({ position }: { position: Vector3 }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position.y + Math.cos(time * 0.4) * 0.3;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#8B5CF6"
        emissive="#8B5CF6"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function FloatingTorus({ position }: { position: Vector3 }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position.y + Math.sin(time * 0.6) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#10B981"
        emissive="#10B981"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366F1" />
        
        <FloatingCube position={new Vector3(-2, 0, 0)} />
        <FloatingSphere position={new Vector3(0, 1, -1)} />
        <FloatingTorus position={new Vector3(2, -1, 0)} />
        <FloatingCube position={new Vector3(-1, -1.5, 1)} />
        <FloatingSphere position={new Vector3(1.5, 0.5, 1)} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

