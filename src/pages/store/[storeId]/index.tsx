/* eslint-disable react-hooks/rules-of-hooks */
import { kisaragi_core } from '@/config';
import { IStore, IStoreData } from '@/interfaces';
import { MainLayout } from '@/layouts';
import { StoreContext } from '@/stateManagement/context';
import { Loading } from '@/ui';
import { ProductList } from '@/views/store';
import Box from '@mui/material/Box';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useContext, useEffect } from 'react';

interface StorePageProps {
  store: IStore;
}

const StorePage: NextPage<StorePageProps> = ({ store }) => {
  const { store_data, store_products } = store;
  const { store: storeContextData, setStore } = useContext(StoreContext);
  const categories = store.store_data.storeCategories
    .map((category) => category.name)
    .join(', ');
  console.log('cat:', categories);
  useEffect(() => {
    if (!storeContextData) setStore(store);
  }, [storeContextData, setStore, store]);

  return storeContextData ? (
    <MainLayout
      title={store_data.name}
      pageDescription={`${store_data.name} es una ${categories} ubicada en ${store_data.address} `}
    >
      <ProductList products={store_products} />
    </MainLayout>
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loading />
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: stores }: { data: IStoreData[] } = await kisaragi_core.get(
    '/stores'
  );

  return {
    paths: stores?.map(({ id }) => ({
      params: {
        storeId: id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { storeId = '' } = params as { storeId: string };
  const { data: store }: { data: IStore } = await kisaragi_core.post(
    '/stores/id',
    { id: storeId }
  );
  if (!store) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { store },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default StorePage;
