'use client';

import * as style from '@/app/project/_component/imageSlider.style';
import {ImageInfo} from '@/model';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {useEffect, useRef, useState} from "react";


const imageSlider = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
    }
};

export default function ImageSlider({images}: { images: ImageInfo[] }) {
    const [pos, setPos] = useState(0);
    const sliderContainer = useRef<HTMLDivElement>(null);
    const [slideImages, setSlideImages] = useState<ImageInfo[]>([]);

    useEffect(() => {
        setSlideImages([...images, ...images].map((it, index) => ({...it, id: index.toString()})));
        setPos(images.length);
    }, []);

    useEffect(() => {
        const firstElement = sliderContainer.current?.querySelector(`#img-${pos}`);
        if (!firstElement) return;
        firstElement.scrollIntoView(true);
    }, [slideImages])
    const onMove = (dir: 1 | -1) => {
        if (!sliderContainer.current) return;
        const len = slideImages.length - 1;
        let curPos = pos;
        if (pos <= 0) {
            curPos = images.length;
            const startImg = sliderContainer.current.querySelector(`#img-${curPos}`);
            startImg?.scrollIntoView(true);
        } else if (pos >= len) {
            curPos = images.length - 1;
            const endImage = sliderContainer.current.querySelector(`#img-${curPos}`);
            endImage?.scrollIntoView(true);
        }


        let targetPos = curPos + dir;

        const targetImg = sliderContainer.current.querySelector(`#img-${targetPos}`);
        if (targetImg) {
            targetImg?.scrollIntoView({behavior: 'smooth'})
        }

        setPos(targetPos);
    };

    return (
        <motion.div
            variants={imageSlider}
            initial="hidden"
            animate="visible"
            className={'flex items-center'}
        >
            <div className={style.moveButton()}
                 onClick={() => onMove(-1)}> {"←"} </div>
            <div className={style.container()}>
                <div className={'flex'} ref={sliderContainer}>
                    {slideImages.map((it) =>
                        it.mime.startsWith('video') ? (
                            <video
                                className={style.imageFrame()}
                                key={it.id}
                                id={`img-${it.id}`}
                                width={1080}
                                height={560}
                                controls
                                preload={'none'}
                            >
                                <source src={it.url} type="video/mp4"/>
                            </video>
                        ) : (
                            <Image
                                className={style.imageFrame()}
                                key={it.id}
                                id={`img-${it.id}`}
                                src={it.url}
                                alt={it.name}
                                width={1080}
                                height={560}
                            />
                        ),
                    )}
                </div>
            </div>
            <div className={style.moveButton()}
                 onClick={() => onMove(1)}> {"→"} </div>
        </motion.div>
    );
}
