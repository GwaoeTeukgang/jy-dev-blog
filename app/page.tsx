import homeStyle from '@/app/home.style';
import ModelCanvas from "@/app/_component/scene/Scene";
import HomeBlog from "@/app/_component/blog/HomeBlog";

export default async function Home() {
    const {container} = homeStyle();

    return (
        <main className={container()}>
            <ModelCanvas/>
            <div className={'lg:mt-28 flex justify-around max-sm:flex-col p-2'}>
                <div>
                    <div className={'text-2xl font-bold'}>{'</> Recent Post'}</div>
                    <HomeBlog/>
                </div>
                <div>
                    <div className={'text-2xl font-bold'}>{'</> Popular Post'}</div>
                    <HomeBlog/>
                </div>
            </div>
        </main>
    );
}
