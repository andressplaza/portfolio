import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, Drawer, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(0, 0, 0, 0.3)', // Reduce la opacidad para que se vea más el fondo
        backdropFilter: 'blur(8px)', // Mantiene el efecto cristal
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        color: 'white',
      }}
    >
      <Toolbar>
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi App
          </Typography>
        )}

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Inicio</Button>
            <Button color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Servicios</Button>
            <Button color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Contacto</Button>
          </Box>
        )}
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, background: 'rgba(0, 0, 0, 0.8)', height: '100%' }}>
          <List>
            <ListItem button>
              <ListItemText primary="Inicio" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Servicios" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contacto" sx={{ color: 'white' }} />
            </ListItem>
          </List>
          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Nav;
