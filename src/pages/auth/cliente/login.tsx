import { FormContent, ImageContent } from '@components/Auth/';
import { Box } from '@mui/system';
import client from '@public/client-login.svg';

const ClientPage = () => {
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
      <FormContent mode="cliente" page="login" />
      <ImageContent image={client} />
    </Box>
  );
};

export default ClientPage;
