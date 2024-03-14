import Image from "next/image";
import myInfoStyle from "@/app/blog/_component/myInfo.style";
import backgroundImg from '@/public/background.jpg';

export default function MyInfo() {
    const {container, backgroundImageWrapper, backgroundImage, userImage} = myInfoStyle();
    return <div className={container()}>
        <div className={backgroundImageWrapper()}>
            <Image src={backgroundImg.src}
                   alt={''}
                   width={1360}
                   height={320}
                   className={backgroundImage()}
            />
        </div>
        <Image src={''} alt={''} className={userImage()}/>
        <h3>이지윤</h3>

    </div>
}