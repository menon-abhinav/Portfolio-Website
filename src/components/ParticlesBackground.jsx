import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "./models/hero_models/Particles"; // your existing Particles.jsx

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ alpha: true, preserveDrawingBuffer: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 15], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Particles count={200} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
