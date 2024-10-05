import { DirectionalLightHelper } from "three";
import { useHelper, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Box = () => {
  const lightref = useRef();
  //   useHelper(lightref, DirectionalLightHelper, 1);
  const boxRef = useRef();

  //   const texture = useTexture("/brick.jpg");
  //   const wall = useTexture("/wall.jpg");
  const { nodes, materials } = useGLTF("/electronic_panel.glb");
  //   console.log(nodes, materials);
  //   useFrame((state, delta) => {
  //     if (boxRef.current) {
  //       boxRef.current.rotation.y += delta * 0.5;
  //     }
  //   });
  return (
    <>
      <group
        ref={boxRef}
        scale={[0.1, 0.1, 0.1]}
        position={[5.5, 0, 3]}
        rotation={[-Math.PI / 3, 0, 0]}
      >
        {Object.keys(nodes).map(
          (nodeName) =>
            nodes[nodeName].isMesh && (
              <mesh
                key={nodeName}
                geometry={nodes[nodeName].geometry}
                material={materials[nodes[nodeName].material.name]}
                roughness={1}
                metalness={2.5}
              />
            )
        )}
      </group>
      <ambientLight intensity={1} />
      <directionalLight ref={lightref} position={[5, 2, 5]} intensity={2} />
    </>
  );
};

export default Box;

useGLTF.preload("/electronic_panel.glb");
