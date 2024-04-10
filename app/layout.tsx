import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/_component/header/Header';
import { homeLayoutContainer } from '@/app/home.style';
import Footer from '@/app/_component/Footer';

export const metadata: Metadata = {
  title: 'Juniverse Dev',
  description: "Juniverse Dev | dev blog & portfolio",
  icons: {
    icon: '/jy-logo.png',
  }
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
    <meta name="naver-site-verification" content={process.env.NEXT_PUBLIC_NAVER_CONTENT}/>
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_CONTENT}/>
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
