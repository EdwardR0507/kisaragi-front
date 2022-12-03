import Facebook from '@/public/facebook-icon.svg';
import Instagram from '@/public/instagram-icon.svg';
import Kisaragi from '@/public/logo.svg';
import { Box, Divider, Link, Typography } from '@mui/material';
import Image from 'next/image';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" textAlign="center">
      {'© Todos Los derechos reservados '}
      <Link color="inherit" href="https://kisaragi-front-murex.vercel.app/">
        Kisaragi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={Kisaragi} alt="Logo" width={30} height={30} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                marginLeft: '10px',
                marginTop: '10px',
              }}
            >
              Kisaragi
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: '10px',
              display: 'flex',
              gap: '10px',
            }}
          >
            <Link href="#" color="inherit" underline="hover">
              <Image src={Facebook} width={20} height={20} alt="Facebook" />
            </Link>
            <Link href="#" color="inherit" underline="hover">
              <Image src={Instagram} width={20} height={20} alt="Instagram" />
            </Link>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Tienda
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Abarrotes
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Frutas y verduras
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Accesorios
            </Link>
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Ayuda
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Preguntas frecuentes
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Envíos
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Contacto
            </Link>
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Enlaces de interes
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Términos y condiciones
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Ayuda
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link href="#" color="inherit" underline="hover">
              Política de privacidad
            </Link>
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body2" gutterBottom>
            Teléfono: (+51) 999 999 999
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email:{' '}
            <Link
              href="mailto: kisaragi@help.com"
              color="inherit"
              underline="hover"
            >
              kisaragi@help.com
            </Link>
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Copyright />
    </Box>
  );
};
