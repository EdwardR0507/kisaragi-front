import { Box, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { AddIcon, RemoveIcon } from '../icons';

interface ItemCounterProps {
  currentQuantity: number;
  maxQuantity: number;
  updateQuantity: (quantity: number) => void;
}

export const ItemCounter: FC<ItemCounterProps> = ({
  currentQuantity,
  maxQuantity,
  updateQuantity,
}) => {
  const addOrRemoveQuantity = (value: number) => {
    if (value === -1) {
      if (currentQuantity === 1) return;
      return updateQuantity(currentQuantity - 1);
    }
    if (currentQuantity >= maxQuantity) return;

    updateQuantity(currentQuantity + 1);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => addOrRemoveQuantity(-1)}>
        <RemoveIcon fill="#666CFF" />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>
        {currentQuantity}
      </Typography>
      <IconButton onClick={() => addOrRemoveQuantity(+1)}>
        <AddIcon fill="#666CFF" />
      </IconButton>
    </Box>
  );
};
