import * as style from "@/app/project/_component/projectItem.style";
import Image from "next/image";

export default function ProjectItem() {
    return <div className={style.projectContainer()}>
        <h2 className={style.projectName()}>Project Name</h2>
        <div>
            <Image src={''} alt={''}/>
            <div></div>
        </div>
    </div>;
}