import { FormLogin, ImageContent } from '@/components/auth/';
import client from '@/public/client-login.svg';
import { Box } from '@mui/system';
import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
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
      <FormLogin />
      <ImageContent image={client} />
    </Box>
  );
};

export default LoginPage;
