'use client'

import {Canvas, useLoader} from "@react-three/fiber";
import React, {useEffect, useRef} from "react";
import {OrbitControls, Plane, RoundedBox, Text, Text3D} from "@react-three/drei";
import * as THREE from 'three';

export default function StackCanvas() {
    const texture = useLoader(THREE.TextureLoader, '/icon/web.svg');

    useEffect(() => {
        // texture.center = new THREE.Vector2(0.5, 0.5);
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.repeat.set(1, 1);


        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('backdrop-blur-[2px]');
                } else {
                    entry.target.classList.remove('backdrop-blur-[2px]')
                }
            })
        }, {
            threshold: 0.8
        })

        const targetCanvas = document.getElementById('stack-canvas')
        if (targetCanvas) {
            observer.observe(targetCanvas);
        }

    }, []);

    return <Canvas id={'stack-canvas'}
                   className={'transition-all w-dvw h-dvh snap-start duration-500 ease-in delay-100'}
                   key={'stack-canvas'}
                   camera={{
                       position: [0, 0, 5],
                   }}>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[5, 5, 5]}/>
        <RoundedBox args={[1, 1, 0.3]} radius={0.1} smoothness={2}>
        </RoundedBox>
        <OrbitControls/>
    </Canvas>
}