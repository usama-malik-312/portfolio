"use client";

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ButtonAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'About Me', to: 'about' },
    { text: 'Skills', to: 'skills' },
    { text: 'Projects', to: 'projects' },
    { text: 'Contact Me', to: 'contact' },
  ];

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Box sx={{ flexGrow: 1, }}>
  <AppBar 
  position="fixed"
  sx={{
    backgroundColor:"#111827",
    color:"#fff",
    boxShadow:'none',
    fontSize:"16px",
  }}
>
  <Toolbar
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height:"80px",
      fontFamily:"Oswald, Arial"
    }}
  >
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
      onClick={toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 700,
      }}
      onClick={handleScrollToTop}
      
    >
      <img src="/logo.svg" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
      <Typography variant="h6" component="div" style={{fontFamily:"Poppins", fontWeight: 700}}>
        Usama Bin Tahir
      </Typography>
    </Box>
    <Box sx={{ 
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      fontWeight: 700,
    }}>
      {menuItems.map((item) => (
        <Button color="inherit" key={item.text}>
          <ScrollLink to={item.to} smooth={true} duration={500} offset={-70}>
            <p  style={{fontFamily:"Poppins", fontWeight: 600}}> {item.text}</p>
          </ScrollLink>
        </Button>
      ))}
    </Box>
  </Toolbar>
</AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          // sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            backgroundColor:"#111827",
            color:"#fff",
            boxShadow:'none',
            fontSize:"16px",
            width: 250,
            fontFamily:"Poppins", fontWeight: 700
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.text} />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ButtonAppBar;
