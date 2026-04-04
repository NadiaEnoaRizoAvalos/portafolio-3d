import { useState } from 'react';

export function useCameraTransition(cameraControlsRef) {
  const [activeItem, setActiveItem] = useState(null);

  const focusItem = async (id, config, e) => {
    if (e) e.stopPropagation();
    if (!cameraControlsRef.current || activeItem) return;

    cameraControlsRef.current.smoothTime = 0.5; 

    await cameraControlsRef.current.setLookAt(
      ...config.camPos,
      ...config.lookAt,
      true
    );

    setActiveItem(id);
    document.body.style.cursor = 'default';
  };

const handleClose = async (defaultPos, defaultLookAt) => {
    setActiveItem(null); 
    
    if (cameraControlsRef.current) {
      cameraControlsRef.current.smoothTime = 0.8; 
      
      await cameraControlsRef.current.setLookAt(
        defaultPos[0], defaultPos[1], defaultPos[2], 
        defaultLookAt[0], defaultLookAt[1], defaultLookAt[2], 
        true
      );
    }
  };

  return { activeItem, focusItem, handleClose };
}