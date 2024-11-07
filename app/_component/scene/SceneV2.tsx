'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from '@react-three/drei';
import {AnimationMixer, Group} from 'three';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import * as THREE from 'three'

const CAMERA_POS = [
    {
        x: 15,
        y: 3,
        z: -5
    },
    {
        x: 0,
        y: 4,
        z: -2
    },
    {
        x: -4,
        y: 3,
        z: 3
    },
    {
        x: 3,
        y: 8,
        z: -3
    },

]
const Model = () => {
    const group = useRef<Group>();
    const mixer = useRef<AnimationMixer>();
    const [model, setModel] = useState<Group | null>(null);
    const vectorLookAt = useState(() => new THREE.Vector3())

    useEffect(() => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/3d/desktop.gltf', (gltf) => {
            setModel(gltf.scene);
            mixer.current = new AnimationMixer(gltf.scene);
            gltf.animations.forEach((clip) => {
                mixer.current?.clipAction(clip).play();
            });
        });
    }, []);

    useFrame((state, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }

        const windowH = window.innerHeight;
        const targetPos = Math.round(window.scrollY / windowH);
        if (group.current) {
            state.camera.lookAt(group.current?.position)
            state.camera.position.lerp(CAMERA_POS[targetPos], 0.02);
        }

    });


    return model ? (
        <primitive
            object={model}
            ref={group}
            position={[0, 0, 0]}
        />
    ) : null;
};

const Scene = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [height, setHeight] = useState<string>('40rem');
    const [cameraPos, setCameraPos] = useState<[number, number, number]>([
        CAMERA_POS[0].x, CAMERA_POS[0].y, CAMERA_POS[0].z
    ]);
    const scrollSpeed = 0.1;
    const cameraRef = useRef(null);

    useEffect(() => {
        if (isMobile) {
            setHeight('90vh');
            setCameraPos([0, 0, 0]);
        }
    }, [isMobile]);


    return (
        <>
            <Canvas
                style={{position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, zIndex: -999}}
                camera={{position: cameraPos}}
            >
                <Model/>
                {/*<OrbitControls ref={cameraRef}/>*/}
                {/*<axesHelper/>*/}
                {/*<gridHelper/>*/}
                <ambientLight intensity={1}/>
                <directionalLight position={[0, 10, 0]} intensity={1.5}/>
            </Canvas>
        </>
    );
};

export default Scene;
