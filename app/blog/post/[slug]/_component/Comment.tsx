'use client';

import {DiscussionEmbed} from "disqus-react";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

interface CommentProps {
    slug: string;
    title: string
}

export default function Comment({slug, title}: CommentProps) {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (process) {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div className={'dark:text-white my-14'}>
            <DiscussionEmbed
                shortname={process.env.NEXT_PUBLIC_DISQUS_NAME ?? ''}
                config={{
                    url: currentUrl,
                    identifier: slug,
                    title: title
                }}
            />
        </div>
    )
}