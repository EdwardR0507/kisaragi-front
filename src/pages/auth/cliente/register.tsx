import { Box } from '@mui/system';
import type { NextPage } from 'next';
import client from '../../../../public/client-register.svg';
import { FormContent, ImageContent } from '../../../components/Auth/';

const ClientRegisterPage: NextPage = () => {
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
      <FormContent mode="cliente" page="register" />
    </Box>
  );
};

export default ClientRegisterPage;
