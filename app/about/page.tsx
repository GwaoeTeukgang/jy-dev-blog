import Image from 'next/image';
import * as style from './profile.style';
import Link from 'next/link';
import React from 'react';
import SkillChart from '@/app/about/_component/SkillChart';
import type { Metadata } from 'next';
import Career from '@/app/about/_component/Career';
import Header from "@/app/_component/header/Header";

export const metadata: Metadata = {
  title: 'About',
  description: "Jiyoon's Profile",
};

const EMAIL = 'ljy10499@gmail.com';
const GITHUB = 'https://github.com/jiyoon0605';
export default function Profile() {
  return (
      <div className={'px-36'}>
        <Header/>
        <main className={'p-2'}>
          <div className={`${style.title()} mt-14`}>{'</> About Me'}</div>
          <div className={style.container()}>
            <div className={'flex flex-col justify-between'}>
              <div>
                <h2 className={'text-2xl font-bold'}>이지윤</h2>
                <h2 className={'text-2xl font-bold'}>Lee Ji yoon</h2>
                <p className={'mt-1 text-lg text-gray-400'}>Web Frontend Developer</p>
                <div className={'my-4 text-gray-400'}>
                  <div>2003.06.05</div>
                  <Link
                      href={`mailto:${EMAIL}`}
                      className={'flex gap-2 my-2 text-sm'}
                  >
                    <Image
                        src={'/icon/email-icon.svg'}
                        alt={EMAIL}
                        width={15}
                        height={15}
                    />
                    {EMAIL}
                  </Link>
                  <Link href={GITHUB} className={'flex gap-2 my-2 text-sm'}>
                    <Image
                        src={'/icon/github-icon.svg'}
                        alt={GITHUB}
                        width={15}
                        height={15}
                    />
                    {GITHUB}
                  </Link>
                </div>
                <p className={'mt-4  max-w-1/2'}>
                  3년차 웹 프론트엔드 개발자 이지윤입니다.
                  <br/> 사용자 중심의 디자인과 사용자 경험을 중요하게 생각하며, 최신
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
          <div className={`${style.title()} mt-40`}>{'</> Skills'}</div>
          <SkillChart/>
          <div className={`${style.title()} mt-40`}>{'</> Career'}</div>
          <Career/>
        </main>
      </div>
  );
}
