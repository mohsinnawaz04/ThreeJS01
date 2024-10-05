import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box.jsx";

const CanvasComponent = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls enableDamping={false} />
        <Box />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
