import { MainLayout } from '@/layouts';
import { StoreContext } from '@/stateManagement/context';
import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const EmptyPage = () => {
  const router = useRouter();
  const { store } = useContext(StoreContext);
  const {
    query: { storeId },
  } = router;

  return (
    <MainLayout title="Empty cart" pageDescription="Your cart is empty">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        {/* <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} /> */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" component="h1">
            El carrito está vacío
          </Typography>
          <NextLink href={`/store/${storeId || store?.store_data.id}`} passHref>
            <Link typography="h4" color="secondary">
              Volver a la tienda
            </Link>
          </NextLink>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default EmptyPage;
