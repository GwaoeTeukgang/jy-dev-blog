'use client';
import Link from 'next/link';
import {useState} from 'react';
import {headerContainer, headerNavContainer} from '@/app/_component/header.style';

export default function Header() {
    const toggleColorMode = () => {
        const root = document.querySelector('html');
        if (root) {
            const isDarkMode = root.className.includes('dark');
            if (isDarkMode) {
                root.classList.remove('dark');
                return;
            }
            root.classList.add('dark');
        }
    };
    return (
        <header className={headerContainer()}>
            <div>logo</div>
            <div style={{display: 'flex'}}>
                <nav>
                    <ul className={headerNavContainer()}>
                        <li>
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li>
                            <Link href={'/article'}>Article</Link>
                        </li>
                        <li>
                            <Link href={'/project'}>Project</Link>
                        </li>
                        <li>
                            <Link href={'/profile'}>Profile</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <label htmlFor={'toggle'}></label>
                    <input
                        id={'toggle'}
                        type={'checkbox'}
                        onClick={toggleColorMode}
                    ></input>
                </div>
            </div>
        </header>
    );
}
