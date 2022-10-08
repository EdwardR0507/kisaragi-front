import {
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Facebook from '@public/facebook-icon.svg';
import Google from '@public/google-icon.svg';
import Image from 'next/image';
import { FC } from 'react';
import { LoginLinks } from './LoginLinks';
import { RegisterLinks } from './RegisterLinks';

interface FormContentProps {
  mode: 'tienda' | 'cliente';
  page: 'login' | 'register';
}

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: '28px',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  height: '330px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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

export const FormContent: FC<FormContentProps> = ({ mode, page }) => {
  return (
    <StyledBox>
      {page === 'register' ? (
        <Typography variant="h6">Regístrate como {mode} 🚀</Typography>
      ) : (
        <Typography variant="h6">Inicia sesión como {mode} 🚀</Typography>
      )}
      <StyledForm>
        {page === 'register' && (
          <StyledInput label="Nombre de Usuario" variant="outlined" />
        )}
        <StyledInput label="Email" variant="outlined" type="email" />
        <StyledInput label="Contraseña" variant="outlined" type="password" />
        <StyledButton variant="contained" color="primary" type="submit">
          {page === 'register' ? 'Registrarse' : 'Iniciar sesión'}
        </StyledButton>
      </StyledForm>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {page === 'register' ? (
          <RegisterLinks mode={mode} />
        ) : (
          <LoginLinks mode={mode} />
        )}
      </Box>
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
    </StyledBox>
  );
};
