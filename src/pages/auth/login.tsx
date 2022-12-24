import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { AuthLayout } from '@/layouts/AuthLayout';
import client from '@/public/client-login.svg';
import { FormLogin, ImageContent } from '@/views/auth/components';
import { Box } from '@mui/system';

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
        <FormLogin />
        <ImageContent image={client} />
      </Box>
    </AuthLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req }); // your fetch function here

  const { p = '/' } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
export default LoginPage;
