import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
//   import {
//     AccountCircleOutlined,
//     AdminPanelSettings,
//     CategoryOutlined,
//     ConfirmationNumberOutlined,
//     EscalatorWarningOutlined,
//     FemaleOutlined,
//     LoginOutlined,
//     MaleOutlined,
//     SearchOutlined,
//     VpnKeyOutlined,
//   } from "@mui/icons-material";

export const SideMenu = () => {
  return (
    <Drawer
      open={false}
      anchor="left"
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            {/* <Input
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            /> */}
          </ListItem>

          <ListItem button>
            <ListItemText primary={'Mi Perfil'} />
          </ListItem>

          <ListItem button>
            <ListItemText primary={'Mis Pedidos'} />
          </ListItem>

          <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
            <ListItemText primary={'Productos'} />
          </ListItem>

          <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
            <ListItemText primary={'Servicios'} />
          </ListItem>

          <ListItem button>
            <ListItemText primary={'Cerrar sesión'} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
