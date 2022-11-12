import { FormRegister, ImageContent } from '@/components/Auth';
import { AuthLayout } from '@/layouts/AuthLayout';
import client from '@/public/client-register.svg';
import { Logo } from '@/ui/Logo';
import { Box } from '@mui/system';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <AuthLayout title="Kisaragi - Registro">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Logo />
        <ImageContent image={client} />
        <FormRegister />
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
