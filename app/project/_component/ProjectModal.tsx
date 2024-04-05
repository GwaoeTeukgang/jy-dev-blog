import * as style from '@/app/project/_component/projectModal.style';
import {getProject} from "@/lib/api/project";
import ImageSlider from "@/app/project/_component/ImageSlider";
import CloseButton from "@/app/project/_component/Closebutton";
import ProjectModalTitle from "@/app/project/_component/ProjectModalTitle";


const getProjectDetail = async (slug: string) => {
    try {
        const { data } = await getProject(slug);
        return data.data;
    } catch (e) {
        throw new Error('프로젝트 정보를 불러오는데 실패했습니다.\n' + e);
    }
};
export default async function ProjectModal({ slug }: {slug: string}) {
    const data = await getProjectDetail(slug);

    return <div className={style.overlay()}>
        <div className={style.container()}>
            <CloseButton/>
            <ImageSlider images={data.image}/>
            <div className={'md:p-14 text-gary-300'}>
                <ProjectModalTitle title={data.projectName}
                                   members={data.memberNum}
                                   period={`${data.startDate} ~ ${data.endDate}`}/>
                <p>{data.projectSummary}</p>
            </div>
        </div>
    </div>
};