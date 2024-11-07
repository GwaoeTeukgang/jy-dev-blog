import ModelCanvas from "@/app/_component/scene/SceneV2";
import Title from "@/app/_component/Title";
import AboutMe from "@/app/_component/AboutMe";

export default function PageV2() {
    return <main className={'relative w-[100dvw] h-[500dvh]'}>
        <ModelCanvas/>
        <Title/>
        <AboutMe/>
    </main>
}