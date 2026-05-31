import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import BlobSphere from "./blobs/BlobSphere";


function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas
          camera={{ position: [0, 1, 7], fov: 75, near: 0.1, far: 1000 }}
          shadows
          gl={{
            antialias: true,
            alpha: false,
          }}
          dpr={[1, 2]}
        >
          {/* <MyLight /> */}
          <OrbitControls
            makeDefault
            autoRotate={true}
            autoRotateSpeed={3}
            makeDefault
          ></OrbitControls>
          <BlobSphere />
        </Canvas>
      </div>
    </>
  );
}

export default App;
