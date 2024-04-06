import Image from 'next/image';
import * as style from './profile.style';
import Link from 'next/link';
import React from 'react';
import SkillChart from '@/app/about/_component/SkillChart';

const EMAIL = 'ljy10499@gmail.com';
export default function Profile() {
  return (
    <main className={'p-2'}>
      <div className={'text-2xl font-bold mt-14 max-sm:text-xl'}>
        {'</> About Me'}
      </div>
      <div className={style.container()}>
        <div className={'flex flex-col justify-between'}>
          <div>
            <h2 className={'text-2xl font-bold'}>이지윤</h2>
            <h2 className={'text-2xl font-bold'}>Lee Ji yoon</h2>
            <p className={'mt-1 text-lg text-gray-400'}>Web Developer</p>
            <div className={'my-4'}>
              <Link
                href={`mailto:${EMAIL}`}
                className={'flex gap-2 my-2 text-sm text-gray-400'}
              >
                <Image
                  src={'/icon/email-icon.svg'}
                  className={'fill-gray-400'}
                  alt={EMAIL}
                  width={15}
                  height={15}
                />
                {EMAIL}
              </Link>
            </div>
            <div></div>
            <p className={'mt-4'}>
              3년차 웹 풀스택 개발자 이지윤입니다.
              <br /> 현재는 웹 프론트엔드에 더 많은 관심을 가지고 있습니다.
              사용자 중심의 디자인과 사용자 경험을 중요하게 생각하며, 최신
              기술을 통해 안정적이고 효율적인 서비스를 제공하고자 노력합니다.
              견고한 기반 위에 차곡차곡 쌓아 올린 경험과 지식을 바탕으로
              프로젝트를 진행하고 있습니다.
            </p>
          </div>
        </div>
        <Image
          className={style.img()}
          src={'/guam_20231102.jpg'}
          alt={'jy'}
          width={500}
          height={700}
        />
      </div>
      <div className={'text-2xl font-bold mt-20 mb-10'}>{'</> Skills'}</div>
      <SkillChart />
    </main>
  );
}
