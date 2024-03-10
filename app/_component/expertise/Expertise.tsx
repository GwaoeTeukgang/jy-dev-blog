import expertiseStyle from "@/app/_component/expertise/expertise.style";
import SkillStack from "@/app/_component/expertise/SkillStack";

export default function Expertise() {
    const {container, stackWrapper} = expertiseStyle();
    return <section className={container()}>
        <strong className={'text-xl'}>{'// My expertise'}</strong>
        <div className={stackWrapper()}>
            <SkillStack title={'experience'}/>
            <SkillStack title={'knowledgeable'}/>
            <SkillStack title={'strong'}/>
        </div>
    </section>
}