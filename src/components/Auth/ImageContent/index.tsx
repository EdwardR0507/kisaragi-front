import { Box, styled, Typography } from '@mui/material';
import Logo from '@public/logo.svg';
import Image from 'next/image';
import { FC } from 'react';

interface ImageContentProps {
  image: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '1.5rem',
  marginLeft: '10px',
  marginTop: '10px',
}));

export const ImageContent: FC<ImageContentProps> = ({ image }) => {
  return (
    <StyledBox>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '2%',
          left: '2%',
        }}
      >
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <StyledTitle>Kisaragi</StyledTitle>
      </div>
      <Image src={image} width={200} height={550} alt="Persona" />
    </StyledBox>
  );
};
