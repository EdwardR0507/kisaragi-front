import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import Cookies from 'js-cookie';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { MainLayout } from '@/layouts';
import { CartContext, StoreContext } from '@/stateManagement/context';
import { Loading } from '@/ui';
import { CartList, OrderSummary } from '@/views/store';

const SummaryPage = () => {
  const router = useRouter();
  const {
    shippingAddress,
    orderSummary: { numberOfItems },
  } = useContext(CartContext);
  const { store } = useContext(StoreContext);
  const {
    query: { storeId },
  } = router;

  useEffect(() => {
    if (!Cookies.get('firstName')) {
      router.push('/checkout/address');
    }
  }, [router]);

  if (!shippingAddress) {
    return (
      <MainLayout title="Noctishop" pageDescription="Cargando">
        <Loading />
      </MainLayout>
    );
  }

  const { address, address2, city, firstName, lastName, phone } =
    shippingAddress;

  return (
    <MainLayout title="Order Summary" pageDescription="Order Summary">
      <Typography variant="h1" component="h1" marginY={2}>
        Resumen de la orden
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7} marginY={2}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h4">
                Resumen ({numberOfItems}
                {numberOfItems > 1 ? ' productos' : ' producto'})
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1" fontWeight={700}>
                  Dirección de entrega
                </Typography>
                <NextLink
                  href={`/store/${
                    storeId || store?.store_data.id
                  }/checkout/address`}
                  passHref
                >
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <Typography>
                {firstName} {lastName}
              </Typography>
              <Typography>
                {address}
                {address2 ? `, ${address2}` : ''}
              </Typography>
              <Typography>{city}</Typography>
              <Typography>{phone}</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink
                  href={`/store/${storeId || store?.store_data.id}/cart`}
                  passHref
                >
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button
                  color="primary"
                  variant="contained"
                  className="circular-btn"
                  fullWidth
                >
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default SummaryPage;
