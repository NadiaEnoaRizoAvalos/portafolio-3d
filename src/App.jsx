import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';
import { useCameraTransition } from './hooks/useCameraTransition';
import { Habitacion } from './components/3d/Environment/Habitacion'; 
import Poster from './components/3d/Props/Poster'
import { Prop } from './components/3d/Props/Prop'; 
import { FloatingScreen } from './components/ui/FloatingScreen';
import { INTERACTION_DATA } from './data/interactions';

const pI = Math.PI;

function App() {
  const cameraControlsRef = useRef();
  const { activeItem, focusItem, handleClose } = useCameraTransition(cameraControlsRef);
  const GENERAL_CAM_POS = [-6.29, 5.46, -6.42];
  const GENERAL_CAM_LOOKAT = [0.32, 2.52, 0.35];

  useEffect(() => {
    setTimeout(() => {
      if (cameraControlsRef.current) {
        cameraControlsRef.current.setLookAt(...GENERAL_CAM_POS, ...GENERAL_CAM_LOOKAT, false);
      }
    }, 200);
  }, []);

  return (
    <div style={{ width: '100vw', 
    height: '100vh', 
    position: 'fixed', 
    top: 0, 
    left: 0,
    overflow: 'hidden' }}>
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-9, 7, -11], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.15} color="#fdec9d" />
        <directionalLight position={[-10, 10, -5]} intensity={0.1} color="white" />

        <spotLight
          position={[10, 8, -1]} 
          target-position={[0, 0, 2]} 
          intensity={200}             
          angle={0.3}                
          penumbra={0.2}             
          color="#fdec9d"
          castShadow
          shadow-mapSize={[1024, 1024]} 
          shadow-camera-far={50}
        />

        <CameraControls ref={cameraControlsRef} makeDefault />

        <Suspense fallback={null}> 
          <Selection>
            <EffectComposer multisampling={0} autoClear={false}>
              <Outline blur visibleEdgeColor="white" edgeStrength={10} />
            </EffectComposer>
              <Habitacion />
              <Prop modelPath="/models/PC.glb" position={[3, 1.75, -1.6]} rotation={[0, 4.6, 0]} onClick={(e) => focusItem('pc', INTERACTION_DATA.pc, e)} interactive={true} />
              <Prop modelPath="/models/libro_abierto.glb" position={[-3.3, 1.75, 3]} scale={0.8} onClick={(e) => focusItem('libro', INTERACTION_DATA.libro, e)} interactive={true} />
              <Prop modelPath="/models/crafteo.glb" position={[-3.3, 0.1, 2.7]} scale={0.7} rotation={[0, Math.PI, 0]} />
              <Prop modelPath="/models/cama.glb" position={[0.7, 0.1, 1]} scale={1.6} />
              <Poster url="/posters/totoro.jpg" position={[1, 4, 4.1]} rotation={[0, Math.PI, 0]} args={[2, 2]} />
              <Prop modelPath="/models/creeper.glb" position={[3, 1.7, -2.5]} scale={0.5} />
              <Prop modelPath="/models/chair.glb" position={[1, 0.1, -2]} rotation={[0, 1, 0]} scale={1.2} />
              <Prop modelPath="/models/escritorio.glb" position={[2.5, 0, -2]} rotation={[0, 1.6, 0]} scale={1.2} />
              <Prop modelPath="/models/alfombra.glb" position={[1, 0.15, 0]} rotation={[0, 0, 0]} scale={0.07} /> 
              <Prop modelPath="/models/biblioteca.glb" position={[-1.3, 0.1, 3.5]} rotation={[0, -1.6, 0]} scale={0.9} />
              <Prop modelPath="/models/biblioteca sin libros.glb" position={[-3.3, 0.1, 3.5]} rotation={[0, -1.6, 0]} scale={0.9} />
              <Prop modelPath="/models/diskette.glb" position={[-3.3, 1, 3.1]} rotation={[1.6, 3.1, 0]} scale={0.3} />       
              <Prop modelPath="/models/libro.glb" position={[-2.6, 1, 3.2]} rotation={[0, 1.5, 0]} scale={0.7} /> 
              <Prop modelPath="/models/diskette.glb" position={[-3.7, 1, 3.1]} rotation={[1.6, 3.1, 0]} scale={0.3} />
          </Selection>
        </Suspense>
      </Canvas>
    
      {activeItem && (
        <FloatingScreen 
          type={activeItem}
          title={INTERACTION_DATA[activeItem].title}
          onClose={() => handleClose(
            [-6.29, 5.46, -6.42], 
            [0.32, 2.52, 0.35]    
          )}
        >
          {INTERACTION_DATA[activeItem].content}
        </FloatingScreen>
      )}
    </div>
  );
}

export default App;