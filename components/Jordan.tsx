'use client'
import {useGLTF} from "@react-three/drei"
import { JordanGLTF } from "./typing";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useControls } from "leva";

function Jordan() {
    const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF
    // pour avoir lrs differenst position de la camera
    const {scene,camera} = useThree()
    const tl = gsap.timeline()
    //Por connaitre les differentes positons on utilse leva

    // const { cameraPosition, scenePosition, sceneRotation } = useControls({
    //     cameraPosition: {
    //         value: { x: 0, y: 0, z: 0 },
    //         step: 0.05
    //     },
    //     scenePosition: {
    //         value: { x: 0, y: 0, z: 0 },
    //         step: 0.05
    //     },
    //     sceneRotation: {
    //         value: { x: 0, y: 0, z: 0 },
    //         step: 0.01
    //     },
        
    // })
    
    
    useLayoutEffect(() => {
        new ScrollTrigger({})
        new ScrollTrigger({});
		// component About.tsx
		tl.to(camera.position, {
			x: 5,
			y: 4.0,
			z: 2.8,
			scrollTrigger: {
				trigger: ".second-section",
				start: "top bottom",
				end: "top top",
				scrub: true,
				immediateRender: false,
			},
		})
			.to(scene.position, {
				x: 3.01,
				y: 0.76,
				z: 3.7,
				scrollTrigger: {
					trigger: ".second-section",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			})

			.to(scene.rotation, {
				x: -0.53,
				y: -3.48,
				z: -0.21,
				scrollTrigger: {
					trigger: ".second-section",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			})

			// component - BuyNow.tsx
			.to(camera.position, {
				x: 5,
				y: 3.8,
				z: 2.8,
				scrollTrigger: {
					trigger: ".third-section",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			})
			.to(scene.position, {
				x: 2.31,
				y: 0.01,
				z: -0.7,
				scrollTrigger: {
					trigger: ".third-section",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			})
			.to(scene.rotation, {
				x: 0.67,
				y: -12.9,
				z: 0.79,
				scrollTrigger: {
					trigger: ".third-section",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			});
    },)

    // useFrame(() => {
    //     camera.position.x = cameraPosition.x
    //     camera.position.y = cameraPosition.y
    //     camera.position.z = cameraPosition.z
    //     // scene postion
    //     scene.position.x = scenePosition.x
    //     scene.position.y = scenePosition.y
    //     scene.position.z = scenePosition.z
    //     // scene rotation
    //     scene.rotation.x = sceneRotation.x
    //     scene.rotation.y = sceneRotation.y
    //     scene.rotation.z = sceneRotation.z
    // })
    return <>
        <directionalLight castShadow position={[-2.38,1.32,0.74]}/>
        <group
            scale={10}
            rotation-x={[-Math.PI * 0.5]}
            position={[2,1,-1]}
        >
            <mesh
                geometry={nodes.shoe_shoe_0.geometry}
                material={materials.shoe}
            />
            <mesh
                geometry={nodes.shoelace_shoelace_0.geometry}
                material={materials.shoelace}
            />
        </group>
    </>
}

export default Jordan