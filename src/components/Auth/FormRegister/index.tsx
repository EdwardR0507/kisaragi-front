import Facebook from '@/public/facebook-icon.svg';
import Google from '@/public/google-icon.svg';
import {
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { InputPassword } from '../InputPassword/index';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flex: 2,
  padding: '28px',
  [theme.breakpoints.down('md')]: {
    padding: '10%',
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  height: '330px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const StyledInput = styled(TextField)(() => ({
  width: '100%',
  height: '50px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
}));

const StyledButton = styled(Button)(() => ({
  width: '100%',
  height: '50px',
  borderRadius: '10px',
}));

export const FormRegister = () => {
  return (
    <StyledBox>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: '50px',
        }}
      >
        <Typography variant="h6">La aventura comienza aquí 🚀</Typography>
        <br />
        <Typography variant="body1" align="center">
          Realiza tus compras por internet de forma segura y rápida
        </Typography>

        <StyledForm>
          <StyledInput label="Nombre de Usuario" variant="outlined" />
          <StyledInput label="Email" variant="outlined" type="email" />
          <InputPassword />
          <StyledButton variant="contained" color="primary" type="submit">
            Registrarse
          </StyledButton>
        </StyledForm>

        <Typography
          variant="body1"
          align="center"
          sx={{
            width: '100%',
            marginTop: '5px',
          }}
        >
          ¿Ya tienes cuenta?{' '}
          <span>
            <NextLink href={`/auth/login`}>
              <a
                style={{
                  color: '#666CFF',
                }}
              >
                Inicia sesión
              </a>
            </NextLink>
          </span>
        </Typography>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Divider sx={{ width: '30%', margin: '28px' }} />
          O
          <Divider sx={{ width: '30%', margin: '28px' }} />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <Image src={Google} width={20} height={20} alt="Google" />
          <Image src={Facebook} width={20} height={20} alt="Facebook" />
        </Box>
      </Box>
    </StyledBox>
  );
};
