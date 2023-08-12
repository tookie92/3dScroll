'use client'
import { Canvas } from "@react-three/fiber"
import Jordan from "./Jordan"
import { Environment, OrbitControls } from "@react-three/drei"
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Suspense } from "react"
import Loading from "./Loading"
gsap.registerPlugin(ScrollTrigger)


function CanvasContainer() {
  return (
      <Canvas
      camera={{
        position: [
            4.742922067308307, 2.2387122409413784, 1.2218255872664914,
        ],
    }}
      >
          <OrbitControls enableZoom={ false} />
      {/* <ambientLight/> */}
      <Suspense fallback={<Loading/>}>
          <Jordan />
      </Suspense>
          <Environment preset="city"/>
    </Canvas>
  )
}

export default CanvasContainer