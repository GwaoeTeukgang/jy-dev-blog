import expertiseStyle from "@/app/_component/expertise/expertise.style";
import SkillStack from "@/app/_component/expertise/SkillStack";
import graphql from "@/lib/graphql";
import {gql} from "graphql-request";
import {Skill} from "@/app/_model/expertise";

export const getSkillStacks = async () => {
    const {skillStacks} = await graphql.request<Skill>(
        gql`
            query MyQuery {
              skillStacks {
                level
                skillName
                skillIcon {
                  fileName
                  url
                }
              }
            }
        `
    );

    return skillStacks;
}
export default async function Expertise() {
    const {container, stackWrapper} = expertiseStyle();
    const skillStacks = await getSkillStacks();

    const strongSkills = skillStacks.filter(skill => skill.level === "STRONG");
    const knowledgeableSkills = skillStacks.filter(skill => skill.level === "KNOWLEDGEABLE");
    const experienceSkills = skillStacks.filter(skill => skill.level === "EXPERIENCE");

    return <section className={container()}>
        <strong className={'text-xl'}>{'// My expertise'}</strong>
        <div className={stackWrapper()}>
            <SkillStack title={'STRONG'} skills={strongSkills}/>
            <SkillStack title={'KNOWLEDGEABLE'} skills={knowledgeableSkills}/>
            <SkillStack title={'EXPERIENCE'} skills={experienceSkills}/>
        </div>
    </section>
}