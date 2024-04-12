'use client';
import {hostname} from "node:os";
import {DiscussionEmbed} from "disqus-react";

interface CommentProps {
    slug: string;
    title: string
}

export default function Comment({slug, title}: CommentProps) {
    const disqusConfig = {
        url: window.location.href,
        identifier: slug,
        title: title
    }
    return (
        <div className={'dark:text-white my-14'}>
            <DiscussionEmbed
                shortname={process.env.NEXT_PUBLIC_DISQUS_NAME ?? ''}
                config={disqusConfig}
            />
        </div>
    )
}