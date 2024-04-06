import homeStyle from '@/app/home.style';
import Image from 'next/image';
import PinkDesk from '@/public/pinkDesk.jpg';
import Projects from '@/app/_component/project/Projects';
import EnterMotion from '@/app/_component/EnterMotion';
import ModelCanvas from "@/app/_component/scene/Scene";

export default async function Home() {
    const {container, intro, introLeft, introRight, homeImage, source} =
        homeStyle();

    return (
        <main className={container()}>
            <ModelCanvas/>
            <Projects/>
        </main>
    );
}
