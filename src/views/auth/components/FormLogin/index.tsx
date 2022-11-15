import Facebook from '@/public/facebook-icon.svg';
import Google from '@/public/google-icon.svg';
import { loginService } from '@/services/auth';
import { ILogin } from '@/views/auth/interfaces/';
import { LoginSchema } from '@/views/auth/validators';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
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

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<ILogin>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (form: ILogin) => {
    const data = await loginService(form);
    if (data?.name == 'AxiosError') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data?.response?.data?.detail,
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: 'Iniciaste sesión correctamente',
    });
  };

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
        <Typography variant="h6" align="center">
          Bienvenido a Kisaragi 👋🏻
        </Typography>
        <br />
        <Typography variant="body1" align="center">
          Inicie sesión en su cuenta y comience su aventura{' '}
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            label="Email"
            variant="outlined"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <StyledInput
            label="Contraseña"
            variant="outlined"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={!isDirty || !isValid}
          >
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
};
