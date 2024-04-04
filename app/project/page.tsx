import ProjectItem from "@/app/project/_component/ProjectItem";
import {getProjects} from "@/lib/api/project";
import {ProjectItemInfo} from "@/model/projectItemInfo";


const getProjectList = async () => {
    try {
        const {data} = await getProjects();
        return data.data;
    } catch (e) {
        throw new Error("프로젝트 리스트를 불러오는데 실패했습니다.\n" + e);
    }
}
export default async function Project() {
    const projectList = await getProjectList();


    return <div className={'flex'}>
        {projectList.map((it: ProjectItemInfo) => <ProjectItem {...it} key={it.id}/>)}
    </div>
}
