import homeStyle from '@/app/home.style';
import Image from 'next/image';
import PinkDesk from '@/public/pinkDesk.jpg';

export default function Home() {
  const {
    container,
    location,
    intro,
    introLeft,
    introRight,
    homeImage,
    source,
  } = homeStyle();

  return (
    <main className={container()}>
      <strong className={location()}>{'</>'} Dev location</strong>
      <div className={intro()}>
        <p className={introLeft()}>
          I AM A PASSIONATE DEVELOPER WITH A LOVE FOR CODING AND INNOVATION.
        </p>
        <p className={introRight()}>
          Welcome to my developer blog and portfolio. I enjoy sharing my
          projects and insights with the community. Feel free to explore and
          connect with me
        </p>
      </div>
      <Image className={homeImage()} src={PinkDesk} alt={'desktop image'} />
      <p className={source()}>
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2303851">
          Pixabay
        </a>
        로부터 입수된
        <a href="https://pixabay.com/ko/users/lum3n-1066559/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2303851">
          LUM3N
        </a>
        님의 이미지 입니다.
      </p>
    </main>
  );
}
