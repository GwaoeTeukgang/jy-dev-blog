import homeStyle from '@/app/home.style';
import ModelCanvas from "@/app/_component/scene/Scene";
import HomeBlog from "@/app/_component/blog/HomeBlog";

export default async function Home() {
    const {container} = homeStyle();

    return (
        <main className={container()}>
            <ModelCanvas/>
            <strong className={'text-xl font-bold'}>{'</> Recent Post'}</strong>
            <HomeBlog/>
        </main>
    );
}
