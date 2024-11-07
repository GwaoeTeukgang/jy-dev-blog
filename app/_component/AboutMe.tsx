'use client'
import {useEffect} from "react";

export default function AboutMe() {
    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0',);
                    entry.target.classList.add('opacity-100', 'transition-opacity', 'duration-700');
                } else {
                    entry.target.classList.add('opacity-0',);
                    entry.target.classList.remove('opacity-100');
                }
            });

        }
        const observer100 = new IntersectionObserver(observerCallback, {threshold: 1});
        const observer50 = new IntersectionObserver(observerCallback, {threshold: 0.5});

        const threshold100 = document.querySelectorAll('.threshold-100');
        const threshold50 = document.querySelectorAll('.threshold-50');
        threshold100.forEach(element => observer100.observe(element));
        threshold50.forEach(element => observer50.observe(element));

        return () => {
            observer100.disconnect();
            observer50.disconnect();
        };
    }, []);
    return <section className={'flex flex-col gap-4 p-40'}>
        <div className={'threshold-100 w-full h-48 bg-red-100 opacity-0'}>

        </div>
        <div className={'threshold-50 w-full h-48 bg-red-100 opacity-0'}>

        </div>
        <div className={'threshold-50 w-full h-48 bg-red-100 opacity-0'}>

        </div>
    </section>
}