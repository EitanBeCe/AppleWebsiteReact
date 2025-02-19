import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights.jsx"
import { Suspense } from "react"
import IPhone from "./IPhone"

const Phone3dModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ? "right-[-100%] : "`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls />

      <group ref={groupRef}>
        <Suspense fallback={<div>Loading</div>}>
          <IPhone />
        </Suspense>
      </group>
    </View>
  )
}

export default Phone3dModelView