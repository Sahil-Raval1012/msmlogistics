import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  Center, 
  PresentationControls
} from '@react-three/drei';

// CardboardBox component - either uses GLTF model or creates a box
function CardboardBox({ boxColor = '#c19a6b', modelPath = null }) {
  const boxRef = useRef();
  
  // Rotate the box slightly on each frame
  useFrame((state, delta) => {
    if (!boxRef.current) return;
    boxRef.current.rotation.y += delta * 0.2;
  });

  // Try to load GLTF model if provided
  if (modelPath) {
    try {
      return <GLTFModel modelPath={modelPath} />;
    } catch (error) {
      console.error("Failed to load GLTF model, falling back to default box", error);
      // Continue to default box if GLTF fails
    }
  }

  // Default cardboard box with tape
  return (
    <group ref={boxRef}>
      {/* Main box */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color={boxColor} 
          roughness={0.9} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Box edges */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial attach="material" color="#8d6e63" linewidth={1} />
      </lineSegments>
      
      {/* Tape on top - horizontal */}
      <mesh position={[0, 0, 1.01]}>
        <boxGeometry args={[2.01, 0.2, 0.05]} />
        <meshBasicMaterial color="#bcaaa4" />
      </mesh>
      
      {/* Tape on top - vertical */}
      <mesh position={[0, 0, 1.01]}>
        <boxGeometry args={[0.2, 2.01, 0.05]} />
        <meshBasicMaterial color="#bcaaa4" />
      </mesh>
    </group>
  );
}

// GLTF Model component
function GLTFModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);
  
  return (
    <primitive 
      object={clonedScene} 
      scale={2} 
      position={[0, 0, 0]} 
      castShadow 
      receiveShadow 
    />
  );
}

// Main 3D viewer component
export default function CardboardBoxViewer({
  backgroundColor = '#e0d7c9',
  boxColor = '#c19a6b',
  modelPath = null,
  className = '',
  autoRotate = false
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className={`relative w-full ${className}`} style={{ minHeight: "400px" }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        onCreated={() => setIsLoading(false)}
      >
        <color attach="background" args={[backgroundColor]} />
        
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <directionalLight position={[-5, 0, -5]} intensity={0.4} />
        
        <PresentationControls
          global
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 1, tension: 170, friction: 26 }}
        >
          <Suspense fallback={null}>
            <Center>
              <CardboardBox boxColor={boxColor} modelPath={modelPath} />
            </Center>
          </Suspense>
        </PresentationControls>
        
        {autoRotate && <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />}
        <Environment preset="warehouse" />
      </Canvas>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-700 font-medium">Loading 3D Model...</p>
          </div>
        </div>
      )}
    </div>
  );
}