import homeStyle from '@/app/home.style';
import ModelCanvas from "@/app/_component/scene/Scene";
import HomeBlog from "@/app/_component/blog/HomeBlog";

export default async function Home() {
    const {container} = homeStyle();

    return (
        <main className={container()}>
            <ModelCanvas/>
            <div className={'lg:mt-32 text-2xl font-bold'}>{'</> Recent Post'}</div>
            <HomeBlog/>
            <div className={'lg:mt-5 text-2xl font-bold'}>{'</> Popular Post'}</div>
        </main>
    );
}
