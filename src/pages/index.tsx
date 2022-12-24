import { StoreLayout } from '@/layouts';
import { Loading } from '@/ui';
import { StoreList, useStores } from '@/views/home';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';

const StorePage: NextPage = () => {
  const { stores, isLoading } = useStores();
  return (
    <StoreLayout
      title="Kisaragi"
      pageDescription="Tienda de productos para pymes y emprendedores"
    >
      <Box display="flex" flexDirection="column" marginBottom={3}>
        <Typography variant="h1" component="h1" fontSize={60}>
          Bienvenido a Kisaragi
        </Typography>
        <Typography variant="h6">
          Seleccione una tienda para acceder a su espacio
        </Typography>
      </Box>
      {isLoading ? <Loading /> : <StoreList stores={stores} />}
    </StoreLayout>
  );
};

export default StorePage;
