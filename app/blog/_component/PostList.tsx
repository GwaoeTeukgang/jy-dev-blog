'use client';

import PostItem from '@/app/blog/_component/PostItem';
import {tv} from 'tailwind-variants';
import {PostItemInfo} from '@/app/blog/_model/blog';
import {useEffect} from 'react';
import useBookmarkStore from '@/store/useBookmarkStore';
import {AnimatePresence, motion, stagger, useAnimate} from "framer-motion";


function useMenuAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "li",
            {opacity: 1, scale: 1, filter: "blur(0px)"},
            {
                duration: 0.2,
                delay: stagger(0.1, {startDelay: 0.15}),
            }
        );
    }, []);

    return scope;
}

const postListContainer = tv({
    base: [
        'grid',
        'grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]',
        'gap-4',
        'p-10',
        'mb-4',
        'max-h-[1200px]',
        'overflow-y-scroll'
    ],
})

export default function PostList({postList}: { postList: PostItemInfo[] }) {
    const {initBookmarks} = useBookmarkStore();

    useEffect(() => {
        const bookmarks = (localStorage.getItem('bookmarks') ?? '').split(',');
        initBookmarks(bookmarks ?? []);

    }, [initBookmarks]);


    return (
        <AnimatePresence mode={'wait'}>
            <ul className={postListContainer()}>
                {postList.map((item, index) =>
                    <motion.li key={item.id}
                               initial={{...animate(index).initial}}
                               animate={animate(index).animate}>
                        <PostItem {...item}/>
                    </motion.li>)}
            </ul>
        </AnimatePresence>

    );
}

const animate =(delay: number) => ({
    initial: {
        translateY: 50,
        opacity: 0,
        transition: {duration: 0.3},
    },
    animate: {
        translateY: 0,
        opacity: 1,
        transition: {duration: 0.3, delay: 0.2 * delay},
    },
    exit: {
        translateY: 50,
        opacity: 0,
        transition: {duration: 0.3},
    },
});