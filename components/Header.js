import React from 'react';
import { Box, useMediaQuery, useTheme, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Link from 'next/link';



const Header1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
     if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  return (
    <Box
      sx={{
        position: 'absolute',
          top: 10,
          left: 10,
          right: 10,
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between', // Adjust based on screen size
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: 'transparent',
          zIndex: 1100,
        }
      }
    >
    <img 
      src={'logoblack.png'} 
      alt="ThunderTech Robotics Logo"
      style={{
        height: '100px',
        filter: 'invert(100%)',
        position: isMobile ? 'absolute' : 'initial', // Adjust based on screen size
        left: isMobile ? '50%' : 'initial',
        top: isMobile ? '50%' : 'initial',
        transform: isMobile ? 'translateX(-50%)' : 'none',
     }}
   />
    {isMobile ? (
      <IconButton
        sx={{ color: 'white', position: 'absolute', right: '10px' }}
        aria-label="menu"
      >
      <MenuIcon />
      </IconButton>
    ) : (
      <Box sx={{ display: 'flex' }}>
      <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('about-us')}>About Us</Button>
      <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('projects')}>Projects</Button>
      <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }}><Link href="/sponsor-us" passHref><a style={{ textDecoration: 'none', color: 'inherit' }}>Sponsor Us</a>
  </Link>
</Button>
</Box>
    )}
    </Box>
  );
};

const Header2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
     
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
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
      <Button sx={{ margin: '0 1rem', color: 'black', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold', '&:hover': {backgroundColor: '#7700ee',},}} onClick={() => scrollToSection('about-us')}>About Us</Button>
      <Button sx={{ margin: '0 1rem', color: 'black', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold', '&:hover': {backgroundColor: '#7700ee',},}} onClick={() => scrollToSection('projects')}>Projects</Button>
      <Button sx={{ margin: '0 1rem', color: 'black', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold', '&:hover': {backgroundColor: '#7700ee',},}}><Link href="/sponsor-us" passHref><a style={{ textDecoration: 'none', color: 'inherit' }}>Sponsor Us</a>
      </Link>
      </Button>
    </Box>
  )}
  </Box>
  </>
);
    
};

const Header = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';
  return isMainPage ? <Header1 /> : <Header2 />;
};

export default Header;