import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
} from '@mui/material';
import NextLink from 'next/link';

import { Cart, Hamburger } from '../icons/';
import { Logo } from '../Logo/index';

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo />
        <Box flex={1} />
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          <NextLink href="/" passHref>
            <Link underline="none">
              <Button>Inicio</Button>
            </Link>
          </NextLink>
          <NextLink href="/productos" passHref>
            <Link underline="none">
              <Button>Productos</Button>
            </Link>
          </NextLink>
          <NextLink href="/servicios" passHref>
            <Link underline="none">
              <Button>Servicios</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <NextLink href="/cart">
          <Link>
            <IconButton>
              <Badge badgeContent={1} color="secondary">
                <Cart fill="#eee" />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <IconButton
          sx={{
            marginLeft: 1,
          }}
        >
          <Hamburger fill="#eee" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
