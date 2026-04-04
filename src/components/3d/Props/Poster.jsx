import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Poster({ url, position, rotation, args = [2, 3] }) {
  const texture = useTexture(url)

  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.NearestFilter

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={args} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}