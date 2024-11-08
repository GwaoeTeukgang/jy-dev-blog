import ProjectItem from '@/app/project/_component/ProjectItem';
import {getProjects} from '@/lib/api/project';
import {ProjectItemInfo} from '@/model/project';
import * as style from '@/app/project/project.style';
import type {Metadata} from 'next';
import Header from "@/app/_component/header/Header";
import React from "react";

export const metadata: Metadata = {
    title: 'Project',
    description: "Jiyoon's Project",
};
const getProjectList = async () => {
    try {
        const {data} = await getProjects();
        return data;
    } catch (e) {
        throw new Error('프로젝트 리스트를 불러오는데 실패했습니다.\n' + e);
    }
};

export default async function Project() {
    const projectList = await getProjectList();

    return (
        <div className={'px-52'}>
            <Header/>
            <div className={style.projectContainer()}>
                <h2 className={style.projectTitle()}>{'</>'} Project List</h2>
                <div className={style.itemContainer()}>
                    {projectList.map((it: ProjectItemInfo) => (
                        <ProjectItem {...it} key={it.id}/>
                    ))}
                </div>
            </div>
        </div>

    );
}
