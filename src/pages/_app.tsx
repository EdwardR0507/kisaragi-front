import { AuthProvider } from '@/stateManagement/context/auth';
import { darkTheme } from '@/themes/index';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
