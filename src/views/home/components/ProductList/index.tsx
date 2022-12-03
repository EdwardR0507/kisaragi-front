import { Grid } from '@mui/material';
import { ProductCard } from '../ProductCard';

interface ProductListProps {
  products: any;
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid container spacing={4}>
      {products.map((product: any) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
