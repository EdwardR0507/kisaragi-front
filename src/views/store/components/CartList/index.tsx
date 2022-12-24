import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { FC, useContext } from 'react';

import { ICartProduct } from '@/interfaces';
import { CartContext, StoreContext } from '@/stateManagement/context';
import { ItemCounter } from '@/ui';
import { useRouter } from 'next/router';
import { currencyFormat } from '../../utils';

interface CartListProps {
  editable?: boolean;
  products?: ICartProduct[];
}

export const CartList: FC<CartListProps> = ({ editable = false, products }) => {
  const {
    query: { storeId },
  } = useRouter();
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);
  const { store } = useContext(StoreContext);

  const onNewCartQuantity = (newQuantity: number, product: ICartProduct) => {
    product.quantity = newQuantity;
    updateCartQuantity(product);
  };

  const productsToShow = products ? products : cart;

  return (
    <>
      {productsToShow.map((product: ICartProduct) => (
        <Grid container spacing={3} key={product.id + product.name}>
          <Grid item xs={3}>
            <NextLink
              href={`/store/${storeId || store?.store_data.id}/product/${
                product.id
              }`}
              passHref
            >
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={
                      product?.image ||
                      'https://images.vexels.com/media/users/3/199820/isolated/preview/892bfdfcb80b356c53405aafbb716513-caja-de-carton-isometrica.png'
                    }
                    component="img"
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.name}</Typography>
              {editable ? (
                <ItemCounter
                  currentQuantity={product.quantity}
                  maxQuantity={10}
                  updateQuantity={(value) => onNewCartQuantity(value, product)}
                />
              ) : (
                <Typography variant="h5">
                  {product.quantity}{' '}
                  {product.quantity > 1 ? 'products' : 'product'}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="subtitle1">
              {currencyFormat(product.price)}
            </Typography>
            {editable && (
              <Button
                variant="text"
                color="primary"
                onClick={() => removeCartProduct(product)}
              >
                Quitar
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
