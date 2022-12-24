import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import Cookies from 'js-cookie';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { MainLayout } from '@/layouts';
import {
  AuthContext,
  CartContext,
  StoreContext,
} from '@/stateManagement/context';
import { Loading } from '@/ui';
import { CartList } from '@/views/store';
import { paymentResolver } from '@/views/store/validators/paymentValidator';
import { useForm } from 'react-hook-form';

interface IPayment {
  cardNumber: string;
  cvv: string;
}

const SummaryPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<IPayment>({
    mode: 'onChange',
    resolver: paymentResolver,
  });

  const router = useRouter();
  const {
    createOrder,
    shippingAddress,
    orderSummary: { numberOfItems },
  } = useContext(CartContext);
  const { store } = useContext(StoreContext);
  const {
    query: { storeId },
  } = router;
  const { user } = useContext(AuthContext);

  const [isPosting, setIsPosting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    if (!Cookies.get('firstName')) {
      router.push('/checkout/address');
    }
  }, [router]);

  const onCreateOrder = async () => {
    setIsPosting(true);
    const { hasError, message } = await createOrder(
      store?.store_data.id || Number(storeId),
      user?.user_id || ''
    );
    if (hasError) {
      setIsPosting(false);
      setErrorMessage(message);
      return;
    }
    router.replace(`/store/${storeId || store?.store_data.id}/orders/history`);
  };

  if (!shippingAddress) {
    return (
      <MainLayout title="Cargando" pageDescription="Cargando">
        <Loading />
      </MainLayout>
    );
  }

  const { address, address2, city, firstName, lastName, phone } =
    shippingAddress;

  return (
    <MainLayout
      title="Resumen de la orden"
      pageDescription="Resumen de la orden"
    >
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
              {!showPayment && (
                <Box sx={{ mt: 3 }} display="flex" flexDirection="column">
                  <Button
                    color="primary"
                    variant="contained"
                    className="circular-btn"
                    fullWidth
                    onClick={() => setShowPayment(true)}
                    disabled={isPosting}
                  >
                    Pagar
                  </Button>
                  <Chip
                    color="error"
                    label={errorMessage}
                    sx={{ display: errorMessage ? 'flex' : 'none', mt: 2 }}
                  />
                </Box>
              )}

              {showPayment && (
                <Box sx={{ mt: 5 }} display="flex" flexDirection="column">
                  <form onSubmit={handleSubmit(onCreateOrder)}>
                    <TextField
                      sx={{ mb: 3 }}
                      id="credit-card"
                      label="Tarjeta de crédito"
                      variant="outlined"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      fullWidth
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber?.message}
                      {...register('cardNumber')}
                    />
                    <TextField
                      sx={{ mb: 3 }}
                      id="cvv"
                      label="CVV"
                      variant="outlined"
                      placeholder="XXX"
                      fullWidth
                      error={!!errors.cvv}
                      helperText={errors.cvv?.message}
                      {...register('cvv')}
                    />
                    <Button
                      color="primary"
                      variant="contained"
                      className="circular-btn"
                      type="submit"
                      fullWidth
                      disabled={!isValid || !isDirty}
                    >
                      Confirmar Orden
                    </Button>
                  </form>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default SummaryPage;
