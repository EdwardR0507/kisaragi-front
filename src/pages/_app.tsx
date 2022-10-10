import { LogoLayout } from '@layouts/LogoLayout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '@themes/index';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LogoLayout>
        <Component {...pageProps} />
      </LogoLayout>
    </ThemeProvider>
  );
}

export default MyApp;
