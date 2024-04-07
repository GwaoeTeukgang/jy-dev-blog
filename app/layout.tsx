import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/_component/header/Header';
import { homeLayoutContainer } from '@/app/home.style';
import Footer from '@/app/_component/Footer';

export const metadata: Metadata = {
  title: 'JIYOON',
  description: "Jiyoon's dev blog & portfolio",
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
    <html lang="en">
    <body className={homeLayoutContainer()}>
    <Header />
        {children}
        <Footer />
        <div id={'portal-container'}></div>
      </body>
    </html>
  );
}
