import Image from 'next/image';
import myInfoStyle from '@/app/blog/_component/myInfo.style';
import backgroundImg from '@/public/background.jpg';
import EnterMotion from '@/app/_component/EnterMotion';

export default function MyInfo() {
  const {
    container,
    backgroundImageWrapper,
    backgroundImage,
    userImage,
    userName,
  } = myInfoStyle();
  return (
    <div className={container()}>
      <div className={backgroundImageWrapper()}>
        <Image
          src={backgroundImg.src}
          alt={''}
          width={1360}
          height={320}
          className={backgroundImage()}
        />
      </div>
      <div style={{ zIndex: 10 }}>
        <EnterMotion>
          <Image
            src={'/me.png'}
            alt={''}
            width={500}
            height={500}
            className={userImage()}
          />
        </EnterMotion>
      </div>
      <h3 className={userName()}>이지윤</h3>
    </div>
  );
}
