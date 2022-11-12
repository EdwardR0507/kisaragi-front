import { createTheme } from '@mui/material/styles';
import { palette } from './base';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...palette,
  },
});
