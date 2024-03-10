import projectStyle from "@/app/_component/project/project.style";

export default function Projects() {
    const {container} = projectStyle();
    return <section className={container()}>
        <strong className={'text-xl'}>{'// My Project'}</strong>
    </section>
}