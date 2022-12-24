import {
  AuthContext,
  StoreContext,
  UiContext,
} from '@/stateManagement/context';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export const SideMenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const { store } = useContext(StoreContext);

  const { logoutUser } = useContext(AuthContext);

  const navigateTo = (path: string) => {
    toggleSideMenu();
    router.push(path);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItemButton
            onClick={() =>
              navigateTo(`/store/${store?.store_data.id}/orders/history`)
            }
          >
            <ListItemText primary={'Mis Órdenes'} />
          </ListItemButton>

          <ListItemButton onClick={() => navigateTo('/')}>
            <ListItemText primary={'Volver a las tiendas'} />
          </ListItemButton>

          <ListItemButton onClick={logoutUser}>
            <ListItemText primary={'Cerrar sesión'} />
          </ListItemButton>

          <Divider sx={{ display: { xs: '', sm: 'none' } }} />

          <ListItemButton
            sx={{ display: { xs: '', sm: 'none' } }}
            onClick={() => navigateTo(`/store/${store?.store_data.id}`)}
          >
            <ListItemText primary={'Inicio'} />
          </ListItemButton>

          <ListItemButton sx={{ display: { xs: '', sm: 'none' } }}>
            <ListItemText primary={'Servicios'} />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};
