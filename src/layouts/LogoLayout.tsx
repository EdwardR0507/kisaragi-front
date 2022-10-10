import { Box, styled, Typography } from '@mui/material';
import Logo from '@public/logo.svg';
import Image from 'next/image';
import { FC } from 'react';

interface LogoLayoutProps {
  children: React.ReactNode;
}

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

export const LogoLayout: FC<LogoLayoutProps> = ({ children }) => {
  return (
    <>
      <Box
        display="flex"
        position="absolute"
        sx={{
          top: {
            xs: '3%',
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
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <StyledTitle>Kisaragi</StyledTitle>
      </Box>
      {children}
    </>
  );
};
