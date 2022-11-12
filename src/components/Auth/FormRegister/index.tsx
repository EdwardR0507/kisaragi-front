import Facebook from '@/public/facebook-icon.svg';
import Google from '@/public/google-icon.svg';
import { registerService } from '@/services/auth';
import { DatePicker } from '@/ui/DatePicker';
import { IRegister } from '@/views/auth/interfaces';
import { RegisterSchema } from '@/views/auth/validators';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import NextLink from 'next/link';
import { Controller, useForm } from 'react-hook-form';

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
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<IRegister>({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (form: IRegister) => {
    const dataToSend = {
      ...form,
      birth_date: dayjs(form.birth_date).format('YYYY-MM-DD'),
      role: 'USER',
    };
    const data = await registerService(dataToSend);
    console.log(data);
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
        <Typography variant="h6">La aventura comienza aquí 🚀</Typography>
        <br />
        <Typography variant="body1" align="center">
          Realiza tus compras por internet de forma segura y rápida
        </Typography>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            label="Nombre"
            variant="outlined"
            {...register('user_name')}
          />
          <StyledInput
            label="Email"
            variant="outlined"
            type="email"
            {...register('email')}
          />
          <StyledInput
            label="Contraseña"
            variant="outlined"
            type="password"
            {...register('password')}
          />
          <StyledInput
            label="Teléfono"
            variant="outlined"
            {...register('telephone_number')}
          />
          <Controller
            name="birth_date"
            control={control}
            defaultValue={null}
            render={({ field, ...props }) => {
              return (
                <DatePicker title="Fecha de nacimiento" {...field} {...props} />
              );
            }}
          />
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={!isValid || !isDirty}
          >
            Registrarse
          </StyledButton>
        </StyledForm>

        <Box marginTop={2}>
          <Typography variant="body1" align="center">
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
      </Box>
    </StyledBox>
  );
};
