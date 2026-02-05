import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleGlobeProps {
  isExiting: boolean;
}

const ParticleGlobe = ({ isExiting }: ParticleGlobeProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 8000;

  const { positions, originalPositions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2 + Math.random() * 0.3;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Colors: cyan to blue gradient
      const colorMix = Math.random();
      colors[i * 3] = 0.05 + colorMix * 0.2; // R
      colors[i * 3 + 1] = 0.5 + colorMix * 0.3; // G
      colors[i * 3 + 2] = 0.8 + colorMix * 0.2; // B
    }

    return { positions, originalPositions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    // Rotate the globe
    pointsRef.current.rotation.y += delta * 0.15;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      if (isExiting) {
        // Explosion effect when exiting
        const direction = new THREE.Vector3(
          originalPositions[i3],
          originalPositions[i3 + 1],
          originalPositions[i3 + 2]
        ).normalize();

        positions[i3] += direction.x * delta * 8;
        positions[i3 + 1] += direction.y * delta * 8;
        positions[i3 + 2] += direction.z * delta * 8;
      } else {
        // Gentle floating animation
        const offset = i * 0.01;
        positions[i3] = originalPositions[i3] + Math.sin(time * 0.5 + offset) * 0.02;
        positions[i3 + 1] = originalPositions[i3 + 1] + Math.cos(time * 0.3 + offset) * 0.02;
        positions[i3 + 2] = originalPositions[i3 + 2] + Math.sin(time * 0.4 + offset) * 0.02;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={isExiting ? 0.5 : 0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleGlobe;
