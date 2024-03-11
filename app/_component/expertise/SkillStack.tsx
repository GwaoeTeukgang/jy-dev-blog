import expertiseStyle from "@/app/_component/expertise/expertise.style";
import Image from "next/image";

interface StackProps {
    title: "experience" | "knowledgeable" | "strong";
}
export default function SkillStack({title}: StackProps) {
    const {skillStack, stackTitle} = expertiseStyle({level: title});
    return <div className={skillStack()}>
        <strong className={stackTitle()}>{title}</strong>
        <ul>
            <li>
                <Image src={''} alt={''}/>
                <p>JavaScript</p>
            </li>
        </ul>
    </div>
}