import type { Metadata } from 'next';
import { ImageResponse } from 'next/og'
import './globals.css';
import Header from '@/app/_component/header/Header';
import { homeLayoutContainer } from '@/app/home.style';
import Footer from '@/app/_component/Footer';

export const metadata: Metadata = {
  title: 'Juniverse Dev',
  description: 'Juniverse Dev | dev blog & portfolio',
  icons: {
    icon: '/jy-logo.png',
  },
  openGraph: {
    title: 'Juniverse Dev',
    description: 'Juniverse Dev | dev blog & portfolio',
    images: [
      {
        url: '/jy-logo.png',
        width: 500,
        height: 500,
        alt: 'Juniverse Dev',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>Juniverse Dev</title>
        <meta
          name="naver-site-verification"
          content={'8484587bdb7e5659bc4d4a9feec7e3c9553a789d'}
        />
        <meta name="google-site-verification" content={'0LqmTBJx15i_Rr7rI4iN0Z3V6EXaNrZYPQFjTqyU8-A'}/>
      </head>
      <body className={homeLayoutContainer()}>
        <Header/>
        {children}
        <Footer />
        <div id={'portal-container'}></div>
      </body>
    </html>
  );
}
