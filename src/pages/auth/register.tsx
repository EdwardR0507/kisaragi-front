import { AuthLayout } from '@/layouts/AuthLayout';
import client from '@/public/client-register.svg';
import { FormRegister, ImageContent } from '@/views/auth/components';
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
        <ImageContent image={client} />
        <FormRegister />
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
