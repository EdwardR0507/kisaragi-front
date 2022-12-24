import { Footer, SideMenu, StoreNavbar } from '@/ui/index';
import Head from 'next/head';
import { FC } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <StoreNavbar />
      </nav>
      <SideMenu />
      <main
        style={{
          margin: '80px auto',
          maxWidth: '1400px',
          padding: '0 30px',
        }}
      >
        {children}
      </main>
      {/* TODO: Responsive footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};
