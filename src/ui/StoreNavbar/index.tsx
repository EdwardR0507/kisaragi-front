import { AuthContext } from '@/stateManagement/context';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useContext } from 'react';
import { LogOut } from '../icons/';
import { Logo } from '../Logo/index';

export const StoreNavbar = () => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo />
        <Box flex={2} />
        <Button
          startIcon={<LogOut fill="#eee" />}
          onClick={logoutUser}
          sx={{
            color: '#eee',
          }}
        >
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};
