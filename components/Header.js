import React from 'react';
import { Box, useMediaQuery, useTheme, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          position: 'relative', // Changed from 'fixed' to 'relative'
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: 'rgb(136, 0, 255)',
        }}
      >
        <Link href="/" passHref>
          <a style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={'/logoblack.png'}
              alt="ThunderTech Robotics Logo"
              style={{
                height: '100px',
                cursor: 'pointer',
              }}
            />
          </a>
        </Link>
        {isMobile ? (
          <IconButton
            sx={{ color: 'black', position: 'absolute', right: '10px' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <Button sx={{ margin: '0 1rem', color: 'black', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('about-us')}>About Us</Button>
            <Button sx={{ margin: '0 1rem', color: 'black', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button sx={{ margin: '0 1rem', color: 'black', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('sponsors')}>Sponsor Us</Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
