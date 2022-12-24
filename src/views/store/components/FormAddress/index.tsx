import { IShippingAddress } from '@/interfaces';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { addressResolver } from '../../validators/addressValidator';

interface IFormAddressProps {
  defaultValues?: IShippingAddress;
  onSubmitAddress: (data: AddressForm) => void;
}

export type AddressForm = {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  phone: string;
};

export const FormAddress: FC<IFormAddressProps> = ({
  defaultValues,
  onSubmitAddress,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: addressResolver,
  });

  const { firstName, lastName, address, address2, city, phone } =
    defaultValues || {};

  return (
    <form onSubmit={handleSubmit(onSubmitAddress)} autoComplete="off">
      <Typography variant="h1" component="h1">
        Datos de envío
      </Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            variant="outlined"
            defaultValue={firstName}
            fullWidth
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido"
            variant="outlined"
            defaultValue={lastName}
            fullWidth
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección"
            variant="outlined"
            defaultValue={address}
            fullWidth
            {...register('address')}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección 2 (optional)"
            variant="outlined"
            defaultValue={address2}
            fullWidth
            {...register('address2')}
            error={!!errors.address2}
            helperText={errors.address2?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ciudad"
            variant="outlined"
            defaultValue={city}
            fullWidth
            {...register('city')}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="tel"
            label="Teléfono"
            variant="outlined"
            defaultValue={phone}
            fullWidth
            {...register('phone')}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className="circular-btn"
          size="large"
        >
          Resumen de la orden
        </Button>
      </Box>
    </form>
  );
};
