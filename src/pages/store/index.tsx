import { MainLayout } from '@/layouts';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout
      title="Kisaragi"
      pageDescription="Tienda de productos para pymes y emprendedores"
    >
      <div>Kisaragi Front</div>
    </MainLayout>
  );
};

export default Home;
