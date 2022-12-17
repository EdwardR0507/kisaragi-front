import { AuthProvider, UiProvider } from '@/stateManagement/context';
import '@/styles/globals.css';
import { darkTheme } from '@/themes/index';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { kisaragi_core } from '../config/api';

const fetcher = async (url: string) => {
  try {
    const res = await kisaragi_core.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <AuthProvider>
          <UiProvider>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
