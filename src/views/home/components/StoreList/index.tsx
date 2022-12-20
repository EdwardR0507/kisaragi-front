import { IStoreData } from '@/interfaces';
import { Grid } from '@mui/material';
import { StoreCard } from '../StoreCard';

interface StoreProps {
  stores: IStoreData[];
}

export const StoreList = ({ stores }: StoreProps) => {
  return (
    <Grid container spacing={4}>
      {stores.map((store: IStoreData) => (
        <StoreCard key={store.id} store={store} />
      ))}
    </Grid>
  );
};
