import { FormContent, ImageContent } from '@components/Auth/';
import { Box } from '@mui/system';
import shop from '@public/shop-register.svg';
import type { NextPage } from 'next';

const ShopRegisterPage: NextPage = () => {
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
      <ImageContent image={shop} />
      <FormContent mode="tienda" page="register" />
    </Box>
  );
};

export default ShopRegisterPage;
