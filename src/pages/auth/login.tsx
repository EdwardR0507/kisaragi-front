import { FormLogin, ImageContent } from '@/components/auth/';
import { AuthLayout } from '@/layouts/AuthLayout';
import client from '@/public/client-login.svg';
import { Logo } from '@/ui/Logo';
import { Box } from '@mui/system';
import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout title="Kisaragi - Iniciar Sesión">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Logo />
        <FormLogin />
        <ImageContent image={client} />
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
