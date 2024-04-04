import expertiseStyle from '@/app/_component/expertise/expertise.style';
import {Skill} from "@/model/expertise";
import SkillStack from "@/app/_component/expertise/SkillStack";

const skillStacks: Skill[] = [];
export default async function Expertise() {
    const {container, stackWrapper} = expertiseStyle();

    const strongSkills = skillStacks.filter((skill) => skill.level === 'STRONG');
    const knowledgeableSkills = skillStacks.filter(
        (skill) => skill.level === 'KNOWLEDGEABLE',
    );
    const experienceSkills = skillStacks.filter(
        (skill) => skill.level === 'EXPERIENCE',
    );

    return (
        <section className={container()}>
            <strong className={'text-xl'}>{'// My expertise'}</strong>
            <div className={stackWrapper()}>
                <SkillStack title={'STRONG'} skills={strongSkills}/>
                <SkillStack title={'KNOWLEDGEABLE'} skills={knowledgeableSkills}/>
                <SkillStack title={'EXPERIENCE'} skills={experienceSkills}/>
            </div>
        </section>
    );
}
