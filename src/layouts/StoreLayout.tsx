import { Navbar, SideMenu } from '@/ui/index';
import Head from 'next/head';
import { FC } from 'react';

interface StoreLayoutProps {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
}

export const StoreLayout: FC<StoreLayoutProps> = ({
  children,
  title,
  pageDescription,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <SideMenu />
      <main
        style={{
          marginTop: '80px',
          maxWidth: '1400px',
          padding: '0 30px',
          minHeight: '100vh ',
        }}
      >
        {children}
      </main>
    </>
  );
};
