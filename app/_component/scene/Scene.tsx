'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Environment, OrbitControls, Text } from '@react-three/drei';
import { AnimationMixer, Group } from 'three';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Vector3 } from 'three/src/math/Vector3.js';
import { number } from 'prop-types';
const Model = () => {
  const group = useRef<Group>();
  const mixer = useRef<AnimationMixer>();
  const [model, setModel] = useState<Group | null>(null);

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

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return model ? (
    <primitive
      object={model}
      ref={group}
      position={[-1, -2, 0]}
      scale={[0.7, 0.7, 0.7]}
    />
  ) : null;
};

const Scene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [height, setHeight] = useState<string>('40rem');
  const [cameraPos, setCameraPos] = useState<[number, number, number]>([
    -1, 1.5, -2,
  ]);

  useEffect(() => {
    if (isMobile) {
      setHeight('90vh');
      setCameraPos([-2, 9, -2]);
    }
  }, [isMobile]);

  return (
    <>
      <Canvas
        style={{ width: '100%', height }}
        camera={{ position: cameraPos }}
      >
        <Model />
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        {/*{typeof window !== 'undefined' && (*/}
        {/*  <>*/}
        {/*    <Text*/}
        {/*      position={[8, 1, 2]}*/}
        {/*      rotation={[0.3, 10, 0.1]}*/}
        {/*      fontSize={0.8}*/}
        {/*      color={isDarkMode ? 'white' : 'black'}*/}
        {/*      anchorX="left"*/}
        {/*      anchorY="middle"*/}
        {/*      maxWidth={10}*/}
        {/*      font={*/}
        {/*        'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff'*/}
        {/*      }*/}
        {/*    >*/}
        {/*      Hello World!*/}
        {/*    </Text>*/}
        {/*    <Text*/}
        {/*      position={[8.2, -0.1, 2]}*/}
        {/*      rotation={[0.3, 10, 0.1]}*/}
        {/*      fontSize={0.4}*/}
        {/*      color={isDarkMode ? 'white' : 'black'}*/}
        {/*      anchorX="left"*/}
        {/*      anchorY="middle"*/}
        {/*      maxWidth={10}*/}
        {/*      font={*/}
        {/*        'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff'*/}
        {/*      }*/}
        {/*    >*/}
        {/*      Welcome to my developer blog and portfolio, where I share insights*/}
        {/*      and projects.*/}
        {/*    </Text>*/}
        {/*  </>*/}
        {/*)}*/}
      </Canvas>
      <div className={'absolute top-9 left-10'}>
        <strong className={'text-4xl font-bold'}>Hello World!</strong>
        <p className={'text-xl'}>
          Welcome to my developer blog and portfolio,
          <br /> where I share insights and projects.
        </p>
      </div>
    </>
  );
};

export default Scene;
