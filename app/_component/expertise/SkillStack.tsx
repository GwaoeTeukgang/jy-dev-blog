import expertiseStyle from "@/app/_component/expertise/expertise.style";
import Image from "next/image";

interface StackProps {
    title: "experience" | "knowledgeable" | "strong";
    skills: {
        url: string;
        skill: string;
    }[]
}
export default function SkillStack({title, skills}: StackProps) {
    const {skillStack, stackTitle, skillItem} = expertiseStyle({level: title});
    return <div className={skillStack()}>
        <strong className={stackTitle()}>{title}</strong>
        <ul>
            {skills.map(({url, skill}) =>
                <li className={skillItem()} key={skill}>
                <Image src={url} alt={skill}/>
                <p>{skill}</p>
            </li>)}
        </ul>
    </div>
}