import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ sx }) => {
  return (
    <AppBar position="static" sx={sx}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: 'Orbitron, sans-serif',
            textAlign: 'center',
            fontSize: '3vh',
          }}
        >
          THSS Robotics Team
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
