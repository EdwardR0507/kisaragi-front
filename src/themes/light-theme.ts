import { createTheme } from '@mui/material/styles';
import { palette } from './base';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...palette,
  },
});
