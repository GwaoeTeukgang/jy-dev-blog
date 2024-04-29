import type { Metadata } from 'next';
import { ImageResponse } from 'next/og'
import './globals.css';
import Header from '@/app/_component/header/Header';
import { homeLayoutContainer } from '@/app/home.style';
import Footer from '@/app/_component/Footer';
import {HOST_URL} from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Juniverse Dev',
  description: 'Juniverse Dev | dev blog & portfolio',
  icons: {
    icon: '/jy-logo.png',
  },
  verification: {
    google: '52_A2iC1h1k6lBb10MF7BgxbB2hb15KWvdqHwL1qDbA',
    other: {
      ['naver-site-verification']: '8484587bdb7e5659bc4d4a9feec7e3c9553a789d',
    }
  },
  openGraph: {
    title: 'Juniverse Dev',
    description: 'Juniverse Dev | dev blog & portfolio',
    url: HOST_URL,
    images: [
      {
        url: '/jy-logo.png',
        width: 500,
        height: 500,
        alt: 'Juniverse Dev',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={homeLayoutContainer()}>
        <Header/>
        {children}
        <Footer />
        <div id={'portal-container'}></div>
      </body>
    </html>
  );
}
