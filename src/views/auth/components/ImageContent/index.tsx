import { Box, styled } from '@mui/material';
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
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
export const ImageContent: FC<ImageContentProps> = ({ image }) => {
  return (
    <StyledBox>
      <Image src={image} width={200} height={550} alt="Persona" />
    </StyledBox>
  );
};
