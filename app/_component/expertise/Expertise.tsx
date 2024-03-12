import expertiseStyle from "@/app/_component/expertise/expertise.style";
import SkillStack from "@/app/_component/expertise/SkillStack";


const skill = {
    strong: [
        {
            url: '',
            skill: 'JavaScript'
        },
        {
            url: '',
            skill: 'TypeScript'
        },
        {
            url: '',
            skill: 'React'
        },
        {
            url: '',
            skill: 'Next'
        },
        {
            url: '',
            skill: 'Git'
        },
    ],
    knowledgeable: [],
    experience: [],
}
export default function Expertise() {
    const {container, stackWrapper} = expertiseStyle();
    return <section className={container()}>
        <strong className={'text-xl'}>{'// My expertise'}</strong>
        <div className={stackWrapper()}>
            <SkillStack title={'strong'} skills={skill.strong}/>
            <SkillStack title={'knowledgeable'} skills={skill.knowledgeable}/>
            <SkillStack title={'experience'} skills={skill.experience}/>
        </div>
    </section>
}