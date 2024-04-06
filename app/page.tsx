import homeStyle from '@/app/home.style';
import HomeBlog from '@/app/_component/blog/HomeBlog';
import dynamic from "next/dynamic";


const ModelCanvas = dynamic(
    () => {
        return import('@/app/_component/scene/Scene');
    },
    { ssr: false }
);
export default async function Home() {
  const { container } = homeStyle();

  return (
    <main className={container()}>
      <ModelCanvas />
      <div className={'lg:mt-28 flex justify-around max-sm:flex-col p-2'}>
        <div>
          <div className={'text-2xl font-bold'}>{'</> Recent Post'}</div>
          <HomeBlog />
        </div>
        <div>
          <div className={'text-2xl font-bold'}>{'</> Popular Post'}</div>
          <HomeBlog />
        </div>
      </div>
    </main>
  );
}
