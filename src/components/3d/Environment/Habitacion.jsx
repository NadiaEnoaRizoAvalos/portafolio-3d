import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { RigidBody, CuboidCollider } from '@react-three/rapier'; 

export function Habitacion(props) { 
  const { scene } = useGLTF('/models/room.glb');
  
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.traverse((object) => {
      if (object.isMesh) {
        object.receiveShadow = true;
        object.castShadow = true; 
        console.log("Parte de la habitación:", object.name);

        const nombre = object.name.toLowerCase();
        if (nombre.includes('Window_frame') || nombre.includes('glass') || nombre.includes('vidrio')) {
          object.castShadow = false; 
          object.material.transparent = true; 
          object.material.opacity = 0.3; 
        }
      }
    });
  }, [clonedScene]);

  return <primitive object={clonedScene} {...props} />;
}