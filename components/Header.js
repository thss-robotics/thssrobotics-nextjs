import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ sx }) => {
  return (
    <AppBar
      position="static"
      sx={{
        //backgroundImage: 'url(/header-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            flexGrow: 1,
            fontFamily: 'Orbitron, sans-serif',
            textAlign: 'center',
            fontSize: '3vh',
            fontStyle: 'italic',
          }}
        >
          THSS Robotics Team
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
