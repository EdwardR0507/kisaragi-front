import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { MainLayout } from '@/layouts';
import { CartContext, StoreContext } from '@/stateManagement/context';
import { Loading } from '@/ui';
import { CartList, OrderSummary } from '@/views/store';

const CartPage = () => {
  const router = useRouter();
  const { isLoaded, cart } = useContext(CartContext);
  const { store } = useContext(StoreContext);
  const {
    query: { storeId },
  } = router;

  useEffect(() => {
    if (isLoaded && cart.length === 0)
      router.replace(`/store/${storeId || store?.store_data.id}/cart/empty`);
  }, [storeId, isLoaded, cart, router, store?.store_data.id]);

  if (!isLoaded || cart.length === 0) {
    return (
      <MainLayout title="Kisaragi" pageDescription="Cargando">
        <Loading />
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Cart" pageDescription="Carrito de compras">
      <Typography variant="h2" component="h1" marginY={2}>
        Su Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7} marginY={2}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h3">Orden</Typography>
              <Divider sx={{ my: 1 }} />
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button
                  color="primary"
                  variant="contained"
                  className="circular-btn"
                  fullWidth
                  href={`/store/${
                    storeId || store?.store_data.id
                  }/checkout/address`}
                >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default CartPage;
