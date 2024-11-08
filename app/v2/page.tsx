import ModelCanvas from "@/app/_component/scene/SceneV2";
import Title from "@/app/_component/Title";
import AboutMe from "@/app/v2/_component/AboutMe";
import SkillChart from "@/app/v2/_component/SkillChart";
import React from "react";

export default function PageV2() {
    return <main className={'relative w-[100dvw] h-[500dvh] overflow-scroll scroll-smooth'}>
        <ModelCanvas/>
        <Title/>
        <SkillChart />
        <AboutMe/>
    </main>
}