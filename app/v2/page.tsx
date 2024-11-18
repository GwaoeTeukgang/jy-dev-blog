import ModelCanvas from "@/app/_component/scene/SceneV2";
import Title from "@/app/_component/Title";
import AboutMe from "@/app/v2/_component/AboutMe";
import React from "react";
import StackCanvas from "@/app/v2/_component/_stack/StackCanvas";

export default function PageV2() {
    return <main id={'v2-main'} className={'relative w-dvw h-dvh overflow-scroll snap-y snap-mandatory'}>
        <ModelCanvas/>
        <Title/>
        <StackCanvas/>
        <AboutMe/>
    </main>
}