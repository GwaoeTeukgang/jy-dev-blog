import * as style from "@/app/project/_component/projectItem.style";
import Image from "next/image";
import {ProjectItemInfo} from "@/model/projectItemInfo";

export default function ProjectItem({projectName, projectSummary, image, skill}: ProjectItemInfo) {
    const thumbnail = image[0].url;

    return <div className={style.projectContainer()}>
        <div className={style.imageContainer()}>
            <Image src={thumbnail}
                   alt={''}
                   width={1920}
                   height={100}
                   className={style.image()}/>
            <div className={style.projectInfo()}>
                <div className={'left'}>
                    <h2 className={style.projectName()}>{projectName}</h2>
                    <div>

                    </div>
                </div>
                <div className={'right'}>
                    <p className={style.projectSummary()}>{projectSummary}</p>
                </div>
            </div>

        </div>

    </div>;
}