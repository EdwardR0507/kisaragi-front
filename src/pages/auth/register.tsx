import { FormRegister, ImageContent } from '@/components/auth';
import client from '@/public/client-register.svg';
import { Box } from '@mui/system';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ImageContent image={client} />
      <FormRegister />
    </Box>
  );
};

export default RegisterPage;
