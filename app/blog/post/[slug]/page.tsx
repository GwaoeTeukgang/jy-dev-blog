import {getPostDetail} from "@/lib/api/blog";
import {PostDetail} from "@/app/blog/_model/blog";
import TagItem from "@/app/blog/_component/TagItem";
import Image from "next/image";
import postItemStyle from "@/app/blog/_component/postItem.style";
import sanitizeHtml from 'sanitize-html';
import postStyle from "@/app/blog/post/[slug]/post.style";

const getPost = async (slug: string): Promise<PostDetail> => {
    try {
        const {data} = await getPostDetail(slug);
        return data.data;
    } catch (e) {
        throw new Error("포스트 정보를 불러오는데 실패했습니다." + slug);
    }

}
export default async function Post({params}: { params: { slug: string } }) {
    const {thumbnail} = postItemStyle();
    const postData = await getPost(params.slug);

    return <div>
        <div className={'w-full mb-24'}></div>
        {postData.thumbnail
            ? <Image src={`${process.env.NEXT_PUBLIC_STRAPI_END_POINT}${postData.thumbnail.url}`}
                     alt={'thumbnail'}
                     className={`mt-12 ${thumbnail()}`}
                     width={postData.thumbnail.formats.medium.width}
                     height={postData.thumbnail.formats.medium.height}/>
            : <div className={`mt-12 ${thumbnail()} w-full h-64 p-4 bg-gradient-to-br from-purple-300 to-pink-500`}>
                {postData.title}
            </div>
        }
        <h1 className={postStyle().title()}>{postData.title}</h1>
        <h3 className={postStyle().summary()}>{postData.summary}</h3>
        <div className={postStyle().tagContainer()}>
            {(postData.tags ?? []).map(tag => <TagItem label={tag.tagLabel} key={tag.id}/>)}
        </div>
        <div className={postStyle().content()}
             dangerouslySetInnerHTML={{
                 __html: sanitizeHtml(postData.content, {
                     allowedTags: false,
                     allowedAttributes: false,
                 })
             }}/>
    </div>
}