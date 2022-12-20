import { IStoreProduct } from '@/interfaces';
import { StoreContext } from '@/stateManagement/context';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

interface ProductCardProps {
  product: IStoreProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    query: { storeId },
  } = useRouter();
  const { store } = useContext(StoreContext);

  return (
    <Grid item xs={6} sm={4}>
      <Card>
        <NextLink
          href={`/store/${storeId || store?.store_data.id}/product/${
            product.id
          }`}
          passHref
          prefetch={false}
        >
          <Link>
            <CardActionArea>
              {product.stock === 0 && (
                <Chip
                  color="secondary"
                  label="No disponible"
                  sx={{
                    position: 'absolute',
                    zIndex: 99,
                    top: '10px',
                    left: '10px',
                  }}
                />
              )}
              <CardMedia
                component="img"
                className="fadeIn"
                image={
                  product?.image ||
                  'https://images.vexels.com/media/users/3/199820/isolated/preview/892bfdfcb80b356c53405aafbb716513-caja-de-carton-isometrica.png'
                }
                alt={product.name}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.name}</Typography>
        <Typography fontWeight={700}>{product.unitPrice}</Typography>
      </Box>
    </Grid>
  );
};
