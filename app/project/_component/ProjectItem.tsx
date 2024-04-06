'use client';

import * as style from '@/app/project/_component/projectItem.style';
import Image from 'next/image';
import { ProjectItemInfo } from '@/model/project';
import Link from 'next/link';
import TagItem from '@/app/blog/_component/TagItem';
import { useRouter } from 'next/navigation';

export default function ProjectItem({
  projectName,
  projectSummary,
  githubLink,
  demoLink,
  projectIcon,
  image,
  skill,
  slug,
  startDate,
  endDate,
}: ProjectItemInfo) {
  const thumbnail = projectIcon?.url ?? image[0].url;
  const router = useRouter();

  return (
    <div
      className={style.imageContainer()}
      onClick={() => router.push(`/project/detail/${slug}`)}
    >
      <Image
        src={thumbnail}
        alt={''}
        width={1920}
        height={100}
        className={style.image()}
      />
      <div className={style.projectInfo()}>
        <div className={'left'}>
          <div className={'flex flex-col'}>
            <h2 className={style.projectName()}>{projectName}</h2>
            <p className={style.projectDate()}>
              {startDate} ~ {endDate}
            </p>
            <p className={style.projectSummary()}>{projectSummary}</p>
          </div>
          <div className={style.iconContainer()}>
            {githubLink && (
              <Link href={githubLink}>
                <Image
                  src={'/icon/github_icon.png'}
                  alt={githubLink}
                  width={25}
                  height={25}
                />
              </Link>
            )}
            {demoLink && (
              <Link href={demoLink}>
                <Image
                  src={'/icon/link_icon.png'}
                  alt={demoLink}
                  width={25}
                  height={25}
                />
              </Link>
            )}
          </div>
        </div>
        <div className={'right'}>
          <ul className={style.skillTag()}>
            {skill
              .slice(0, 5)
              ?.map((it) => <TagItem key={it.id} label={it.tagLabel} />)}
            {skill.length > 5 && <TagItem label={'...'} />}
          </ul>
        </div>
      </div>
    </div>
  );
}
