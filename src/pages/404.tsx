import image from '@/public/404.svg';
import floor from '@/public/404_floor.svg';
import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

const Error404Page = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Página no encontrada" />
        <meta name="og:title" content="404" />
        <meta name="og:description" content="Página no encontrada" />
      </Head>
      <main>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: '100%',
            height: '100vh',
            position: 'relative',
          }}
        >
          <Box>
            <Typography variant="h1" component="h1">
              404
            </Typography>
            <Typography variant="h5" component="h5">
              Página no encontrada ⚠️
            </Typography>
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Image src={image} width={200} height={400} alt="Persona" />
            <Button variant="contained" color="primary" href="/">
              Ir al inicio
            </Button>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                zIndex: -1,
              }}
            >
              <Image src={floor} width={1440} height={338} alt="Suelo" />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Error404Page;
