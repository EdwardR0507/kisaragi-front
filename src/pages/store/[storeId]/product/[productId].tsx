import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import { kisaragi_core } from '@/config';
import { ICartProduct, IStoreData, IStoreProduct } from '@/interfaces';
import { MainLayout } from '@/layouts';
import { CartContext, StoreContext } from '@/stateManagement/context';
import { ItemCounter } from '@/ui';
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

interface ProductPageProps {
  product: IStoreProduct;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);
  const { store } = useContext(StoreContext);
  const {
    query: { storeId },
  } = router;
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    id: product.id.toString(),
    image: product?.image || '',
    price: product.unitPrice,
    name: product.name,
    quantity: 1,
  });

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  const onAddToCart = () => {
    addProductToCart(tempCartProduct);
    router.push(`/store/${storeId || store?.store_data.id}/cart`);
  };

  return (
    <MainLayout title={product.name} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <CardActionArea>
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
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.name}
            </Typography>
            <Typography variant="h3" component="h3">
              S/. {product.unitPrice}
            </Typography>
            <Box sx={{ my: 2 }}>
              <ItemCounter
                currentQuantity={tempCartProduct.quantity}
                updateQuantity={onUpdateQuantity}
                maxQuantity={product.stock > 10 ? 10 : product.stock}
              />
            </Box>
            {product.stock > 0 ? (
              <Button
                color="primary"
                className="circular-btn"
                variant="contained"
                onClick={onAddToCart}
              >
                Añadir al carrito
              </Button>
            ) : (
              <Chip label="No disponible" color="error" variant="outlined" />
            )}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h4">Descripción</Typography>
              <Typography variant="body1">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: stores }: { data: IStoreData[] } = await kisaragi_core.get(
    '/stores'
  );

  const { data: products }: { data: IStoreProduct[] } = await kisaragi_core.get(
    '/products'
  );

  const paths = stores?.map(({ id: storeId }) => {
    return products.map((product) => {
      const { id: productId } = product;
      return {
        params: {
          storeId: storeId.toString(),
          productId: productId.toString(),
        },
      };
    });
  });
  return {
    paths: paths.flat(),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productId = '' } = params as { productId: string };
  const { data: product }: { data: IStoreProduct } = await kisaragi_core.post(
    '/products/by_id',
    { id: productId }
  );

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default ProductPage;
