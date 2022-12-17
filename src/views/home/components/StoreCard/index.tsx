import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { IStoreData } from '../../interfaces';

interface StoreCardProps {
  store: IStoreData;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <Grid item xs={6} sm={4}>
      <Card>
        <NextLink href={`/store/a`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={
                  store?.image ||
                  'https://i.pinimg.com/originals/33/66/3a/33663afe1341595fef614dad3305d328.jpg'
                }
                alt={store.name}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{store.name}</Typography>
        <Typography fontWeight={700}>{store.address}</Typography>
        <Typography fontWeight={400}>{store.telephone}</Typography>
      </Box>
    </Grid>
  );
};
