import { Box } from '@mui/system';
import client from '../../../../public/client-register.svg';
import { FormContent, ImageContent } from '../../../components/Auth/';

const ClientRegisterPage = () => {
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
