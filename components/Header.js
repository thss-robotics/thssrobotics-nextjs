import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

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
      <Link href="https://thssrobotics.com">
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
              ThunderTech Robotics
            </Typography>
        </Toolbar>
      </Link>
    </AppBar>
  );
};

export default Header;
