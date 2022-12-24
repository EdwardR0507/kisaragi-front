import Kisaragi from '@/public/logo.svg';
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '1.5rem',
  marginLeft: '10px',
  marginTop: '10px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

export const Logo = () => {
  return (
    <Box
      display="flex"
      position="absolute"
      sx={{
        top: {
          xs: '10%',
          md: '2%',
        },
        left: {
          xs: '3%',
          md: '2%',
        },
        width: {
          xs: '120px',
          md: '150px',
        },
      }}
    >
      <Image src={Kisaragi} alt="Logo" width={50} height={50} />
      <StyledTitle>Kisaragi</StyledTitle>
    </Box>
  );
};
