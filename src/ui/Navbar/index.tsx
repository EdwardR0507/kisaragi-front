import { UiContext } from '@/stateManagement/context';
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Cart, CloseIcon, Hamburger, Search } from '../icons/';
import { Logo } from '../Logo/index';

export const Navbar = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const { asPath, push } = router;

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo />
        <Box flex={1} />
        <Box
          className="fadeIn"
          sx={{
            display: isSearchVisible
              ? 'none'
              : {
                  xs: 'none',
                  sm: 'block',
                },
            marginLeft: '50px',
          }}
        >
          <NextLink href="/store" passHref>
            <Link underline="none">
              <Button color={asPath === '/' ? 'warning' : 'primary'}>
                Inicio
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/productos" passHref>
            <Link underline="none">
              <Button color={asPath === '/productos' ? 'warning' : 'primary'}>
                Productos
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/servicios" passHref>
            <Link underline="none">
              <Button color={asPath === '/servicios' ? 'warning' : 'primary'}>
                Servicios
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          {isSearchVisible ? (
            <Input
              className="fadeIn"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsSearchVisible(false)}>
                    <CloseIcon fill="#eee" />
                  </IconButton>
                </InputAdornment>
              }
            />
          ) : (
            <IconButton
              className="fadeIn"
              onClick={() => setIsSearchVisible(true)}
            >
              <Search fill="#eee" />
            </IconButton>
          )}
        </Box>

        {/* Small viewports */}
        <IconButton
          sx={{
            display: {
              xs: 'flex',
              sm: 'none',
            },
          }}
          onClick={toggleSideMenu}
        >
          <Search fill="#eee" />
        </IconButton>

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
          onClick={toggleSideMenu}
        >
          <Hamburger fill="#eee" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
