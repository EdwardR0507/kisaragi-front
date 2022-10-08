import { FormContent, ImageContent } from '@components/Auth/';
import { Box } from '@mui/system';
import shop from '@public/shop-login.svg';

const LoginPage = () => {
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
      <FormContent mode="tienda" page="login" />
      <ImageContent image={shop} />
    </Box>
  );
};

export default LoginPage;