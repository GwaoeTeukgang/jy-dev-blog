import { getPostDetail } from '@/lib/api/blog';
import { PostDetail } from '@/model/blog';
import TagItem from '@/app/blog/_component/TagItem';
import Image from 'next/image';
import postItemStyle from '@/app/blog/_component/postItem.style';
import sanitizeHtml from 'sanitize-html';
import postStyle from '@/app/blog/post/[slug]/post.style';
import type { Metadata } from 'next';
import { PostIndex } from '@/app/blog/post/[slug]/_model';
import IndexNav from '@/app/blog/post/[slug]/_component/IndexNav';
import { Props } from '@/model';
import PostThumbnail from "@/app/_component/PostThumbnail";

const getPost = async (slug: string): Promise<PostDetail> => {
  try {
    const { data } = await getPostDetail(slug);
    return data.data;
  } catch (e) {
    throw new Error('포스트 정보를 불러오는데 실패했습니다.\n' + e);
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPost(params.slug);

  return {
    title: postData.title,
    description: postData.summary,
    keywords: postData.tags.map((it) => it.tagLabel),
    openGraph: {
      images: [postData.thumbnail?.url ?? ''],
    },
  };
}

export default async function Post({ params }: Props) {
  const { thumbnail } = postItemStyle();
  const postData = await getPost(params.slug);

  const getIndex = () => {
    const headingRegex = new RegExp(/<h[1-3]>|<\/h[1-3]>/);
    const index: PostIndex[] = [];
    let cnt = [0, 0, 0];

    postData.content
      .split('\n')
      .filter((it) => headingRegex.test(it))
      .map((it) => {
        const level = Number(it.slice(2, 3));
        const text = it.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');

        index.push({
          text,
          level,
          id: cnt[level - 1]++,
        });
      });
    return index;
  };

  return (
    <div id={'blog-container'}>
      <div className={'w-full mb-12'}></div>
        <PostThumbnail img={postData.thumbnail} title={postData.title} className={`mt-12 h-40 ${thumbnail()}`}/>
      <h1 className={postStyle().title()}>{postData.title}</h1>
      <h3 className={postStyle().summary()}>{postData.summary}</h3>
      <div className={postStyle().tagContainer()}>
        {(postData.tags ?? []).map((tag) => (
          <TagItem label={tag.tagLabel} key={tag.id} />
        ))}
      </div>
      <div
        id={'content-container'}
        className={postStyle().content()}
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(postData.content, {
            allowedTags: false,
            allowedAttributes: false,
          }),
        }}
      />
      <IndexNav indexList={getIndex()} />
    </div>
  );
}
