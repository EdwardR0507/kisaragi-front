import { CartContext } from '@/stateManagement/context';
import { Grid, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { currencyFormat } from '../../utils';

interface OrderSummaryProps {
  orderValues?: {
    numberOfItems: number;
    subTotal: number;
    total: number;
    tax: number;
  };
}

export const OrderSummary: FC<OrderSummaryProps> = ({ orderValues }) => {
  const {
    orderSummary: { numberOfItems, subTotal, total, tax },
  } = useContext(CartContext);

  const summaryValues = orderValues
    ? orderValues
    : { numberOfItems, subTotal, total, tax };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>N° de Productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {summaryValues.numberOfItems}{' '}
          {summaryValues.numberOfItems > 1 ? 'productos' : 'producto'}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currencyFormat(summaryValues.subTotal)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currencyFormat(summaryValues.tax)}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography>Monto a pagar: </Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography>{currencyFormat(summaryValues.total)}</Typography>
      </Grid>
    </Grid>
  );
};
