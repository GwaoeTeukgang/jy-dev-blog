'use client';

import Link from 'next/link';
import style from '@/app/_component/header.style';
import {useSelectedLayoutSegment} from "next/navigation";
import DarkModeToggle from "@/app/_component/DarkModeToggle";

interface Navigation {
    path: string;
    name: string
}

const HEADER_NAVIGATION: Navigation[] = [
    {
        path: 'blog',
        name: 'Blog'
    },
    {
        path: 'article',
        name: 'Article'
    },
    {
        path: 'project',
        name: 'Project'
    },
    {
        path: 'profile',
        name: 'Profile'
    },
]

export default function Header() {
    const segment = useSelectedLayoutSegment();
    const {base, navContainer, navItem} = style();


    return (
        <header className={base()}>
            <div>Dev Story</div>
            <div style={{display: 'flex'}}>
                <nav>
                    <ul className={navContainer()}>
                        {
                            HEADER_NAVIGATION.map(({path, name}) =>
                                <li key={name} className={navItem()} data-active={segment === path}>
                                    <Link href={`/${path}`}>{name}</Link>
                                </li>)
                        }
                    </ul>
                </nav>
                <DarkModeToggle/>
            </div>
        </header>
    );
}
