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
import { InputPassword } from '../InputPassword';

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

export const FormLogin = () => (
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
      <Typography variant="h6" align="center">
        Bienvenido a Kisaragi 👋🏻
      </Typography>
      <br />
      <Typography variant="body1" align="center">
        Inicie sesión en su cuenta y comience su aventura{' '}
      </Typography>
      <StyledForm>
        <StyledInput label="Email" variant="outlined" type="email" />
        <InputPassword />
        <StyledButton variant="contained" color="primary" type="submit">
          Iniciar sesión
        </StyledButton>
      </StyledForm>

      <Typography
        variant="body1"
        align="center"
        sx={{
          width: '100%',
        }}
      >
        ¿No tiene cuenta?{' '}
        <span
          style={{
            color: 'red',
          }}
        >
          <NextLink href={`/auth/register`}>
            <a
              style={{
                color: '#666CFF',
              }}
            >
              Regístrese
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
        <Divider sx={{ width: '35%', margin: '30px' }} />
        O
        <Divider sx={{ width: '35%', margin: '30px' }} />
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
