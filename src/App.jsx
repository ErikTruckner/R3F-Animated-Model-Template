import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FantasyBook from './modelComponents/FantasyBook'

function App() {
  return (
    <>
      <Canvas>
        <color attach='background' args={['black']} />
        <OrbitControls />
        <ambientLight />
        <FantasyBook />
      </Canvas>
    </>
  )
}

export default App