"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Torus, Float } from "@react-three/drei";
import * as THREE from "three";

function RotatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 0]} position={[-3, 2, -2]}>
        <meshStandardMaterial color="#0066FF" wireframe />
      </Icosahedron>
    </Float>
  );
}

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.1;
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1.5, 0.4, 16, 100]} position={[4, -1, -5]}>
        <meshStandardMaterial color="#00F0FF" wireframe transparent opacity={0.5} />
      </Torus>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <RotatingIcosahedron />
        <RotatingTorus />
      </Canvas>
    </div>
  );
}
