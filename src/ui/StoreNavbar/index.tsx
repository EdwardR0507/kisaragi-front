import {
  CartContext,
  StoreContext,
  UiContext,
} from '@/stateManagement/context';
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
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Cart, Hamburger, Search } from '../icons';
import { Logo } from '../Logo/index';

export const StoreNavbar = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const { store } = useContext(StoreContext);
  const {
    orderSummary: { numberOfItems },
  } = useContext(CartContext);

  const {
    asPath,
    query: { storeId },
  } = router;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo />
        <Box flex={1} />
        <Box
          className="fadeIn"
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
            marginLeft: '50px',
          }}
        >
          <NextLink href={`/store/${storeId || store?.store_data.id}`} passHref>
            <Link underline="none">
              <Button
                color={
                  asPath === `/store/${storeId || store?.store_data.id}`
                    ? 'warning'
                    : 'primary'
                }
              >
                Inicio
              </Button>
            </Link>
          </NextLink>
          {/* <NextLink href="/products" passHref>
            <Link underline="none">
              <Button color={asPath === '/products' ? 'warning' : 'primary'}>
                Productos
              </Button>
            </Link>
          </NextLink> */}
          <NextLink href="/services" passHref>
            <Link underline="none">
              <Button color={asPath === '/services' ? 'warning' : 'primary'}>
                Servicios
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />

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

        <NextLink href={`/store/${storeId || store?.store_data.id}/cart`}>
          <Link>
            <IconButton>
              <Badge
                badgeContent={numberOfItems > 9 ? '+9' : numberOfItems}
                color="secondary"
              >
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
