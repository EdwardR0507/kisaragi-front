import { IStoreProduct } from '@/interfaces';
import { Grid } from '@mui/material';
import { ProductCard } from '../ProductCard';
interface StoreProps {
  products: IStoreProduct[];
}

export const ProductList = ({ products }: StoreProps) => {
  return (
    <Grid container spacing={4}>
      {products.map((product: IStoreProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};
