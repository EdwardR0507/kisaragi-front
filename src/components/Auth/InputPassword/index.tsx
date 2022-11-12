import { Visibilitty, VisibilittyOff } from '@/ui/Icons';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl sx={{ width: '100%' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? (
                <VisibilittyOff fill="#EAEAFFDE" />
              ) : (
                <Visibilitty fill="#EAEAFFDE" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Contraseña"
      />
    </FormControl>
  );
};
