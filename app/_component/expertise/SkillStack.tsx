import expertiseStyle from '@/app/_component/expertise/expertise.style';
import {ExpertiseLevel,} from '@/model/expertise';

interface StackProps {
    title: ExpertiseLevel;
    skills: any[];
}

export default function SkillStack({title,}: StackProps) {
    const {skillStack, stackTitle, stack, skillItem} = expertiseStyle({
        level: title,
    });

    return (
        <div className={skillStack()}>
            {/*<strong className={stackTitle()}>{title}</strong>*/}
            {/*<ul className={stack()}>*/}
            {/*    {skills.map(({skillName, skillIcon}) => (*/}
            {/*        <li className={skillItem()} key={skillName}>*/}
            {/*            <Image*/}
            {/*                src={skillIcon.url}*/}
            {/*                alt={skillIcon.alt ?? skillName}*/}
            {/*                width={40}*/}
            {/*                height={40}*/}
            {/*            />*/}
            {/*            <strong>{skillName}</strong>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
}
