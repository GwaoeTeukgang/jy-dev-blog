import * as style from '@/app/project/_component/projectModal.style';
import { getProject } from '@/lib/api/project';
import ImageSlider from '@/app/project/_component/ImageSlider';
import CloseButton from '@/app/project/_component/Closebutton';
import ProjectModalTitle from '@/app/project/_component/ProjectModalTitle';
import TagItem from '@/app/blog/_component/TagItem';
import Link from 'next/link';
import Image from 'next/image';

const getProjectDetail = async (slug: string) => {
  try {
    const { data } = await getProject(slug);
    return data.data;
  } catch (e) {
    throw new Error('프로젝트 정보를 불러오는데 실패했습니다.\n' + e);
  }
};
export default async function ProjectModal({
  slug,
  isInterceptor = true,
}: {
  slug: string;
  isInterceptor?: boolean;
}) {
  const data = await getProjectDetail(slug);

  return (
    <div className={style.overlay()}>
      <div className={style.container()}>
        <CloseButton isInterceptor={isInterceptor} />
        <div className={'flex max-sm:flex-col'}>
          <ImageSlider images={data.image} />
          <div className={style.detailInfoContainer()}>
            <ProjectModalTitle
              title={data.projectName}
              members={data.memberNum}
              iconUrl={data.projectIcon?.url}
              contribution={data.contribution}
              period={`${data.startDate} ~ ${data.endDate}`}
            />
            <ul className={style.skillTags()}>
              {data.skills &&
                data.skills.map((it) => (
                  <TagItem key={it.id} label={it.tagLabel} />
                ))}
            </ul>
            <p className={'max-h-20 overflow-y-scroll text-gray-400'}>
              {data.projectSummary}
            </p>
            <div
              className={
                'flex-1 overflow-y-scroll mt-4 p-4 text-gray-950 dark:text-gray-300'
              }
            >
              <p> {data.detail}</p>
              <div className={'mt-4'}>
                <strong>주요 기능</strong>
                <ul className={'mt-2 pl-4'}>
                  {data.features &&
                    data.features.map(({ id, featuresLabel }) => (
                      <li
                        key={id}
                        className={
                          'mb-1 marker:content-["❇"] marker:font-bold'
                        }
                      >
                        {featuresLabel}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer()}>
          {data.githubLink && (
            <Link href={data.githubLink} className={style.footerButton()}>
              <Image
                src={'/icon/github-icon.png'}
                alt={data.githubLink}
                width={25}
                height={25}
              />
              Gihub 바로가기
            </Link>
          )}
          {data.demoLink && (
            <Link href={data.demoLink} className={style.footerButton()}>
              <Image
                src={'/icon/link_icon.png'}
                alt={data.demoLink}
                width={25}
                height={25}
              />
              Demo 바로가기
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
