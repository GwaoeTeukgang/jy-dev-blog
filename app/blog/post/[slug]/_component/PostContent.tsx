'use client'

import postStyle from "@/app/blog/post/[slug]/post.style";
import sanitizeHtml from "sanitize-html";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import {useEffect} from "react";
export default function PostContent({content}: {content: string}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return <div
        id={'content-container'}
        className={postStyle().content()}
        dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content, {
                allowedTags: false,
                allowedAttributes: false,
            }),
        }}
    />
}