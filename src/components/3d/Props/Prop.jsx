// 1. Agregá onClick acá arriba, al lado de interactive
import { useGLTF } from '@react-three/drei';
import { useState, useMemo } from 'react';
import { Select } from '@react-three/postprocessing';

export function Prop({ modelPath, position, rotation = [0, 0, 0], scale = 1, interactive = false, onClick, ...props }) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const [hovered, setHovered] = useState(false);

  return (
    <Select enabled={hovered && interactive}>
      <primitive 
        object={clonedScene} 
        position={position}
        rotation={rotation}
        scale={scale} 
        {...props} 
        onClick={onClick} 
        
        castShadow={true}
        receiveShadow={true}
        onPointerOver={(e) => {
          if (interactive) {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={() => {
          if (interactive) {
            setHovered(false);
            document.body.style.cursor = 'default';
          }
        }}
      />
    </Select>
  );
}