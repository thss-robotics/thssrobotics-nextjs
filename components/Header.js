import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const sectionId = router.asPath.split('#')[1];
      scrollToSection(sectionId);
    }
  }, [router.asPath]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250, maxHeight: '80vh', overflowY: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <Link href="/#about-us" passHref>
            <ListItemText primary="About Us" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/#projects" passHref>
            <ListItemText primary="Projects" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/sponsor-us" passHref>
            <ListItemText primary="Sponsor Us" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'transparent',
        zIndex: 1100,
      }}
    >
      <img 
        src={'/logoblack.png'} 
        alt="ThunderTech Robotics Logo"
        style={{
          height: '100px',
          filter: 'invert(100%)',
          position: isMobile ? 'absolute' : 'initial',
          left: isMobile ? '50%' : 'initial',
          top: isMobile ? '50%' : 'initial',
          transform: isMobile ? 'translateX(-50%)' : 'none',
        }}
      />
      {isMobile ? (
        <>
          <IconButton
            sx={{ color: 'white', position: 'absolute', right: '10px' }}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <Link href="/#about-us" passHref>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
            </Link>
          </Button>
          <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <Link href="/#projects" passHref>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
            </Link>
          </Button>
          <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <Link href="/sponsor-us" passHref>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>Sponsor Us</a>
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
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const sectionId = router.asPath.split('#')[1];
      scrollToSection(sectionId);
    }
  }, [router.asPath]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250, maxHeight: '80vh', overflowY: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <Link href="/#about-us" passHref>
            <ListItemText primary="About Us" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/#projects" passHref>
            <ListItemText primary="Projects" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/sponsor-us" passHref>
            <ListItemText primary="Sponsor Us" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          padding: '1.7rem',
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
                filter: 'invert(100%)',
                cursor: 'pointer',
              }}
            />
          </a>
        </Link>
        {isMobile ? (
          <>
            <IconButton
              sx={{ color: 'black', position: 'absolute', right: '10px' }}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold', '&:hover': { backgroundColor: '#7700ee' } }}>
              <Link href="/#about-us" passHref>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
              </Link>
            </Button>
            <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold', '&:hover': { backgroundColor: '#7700ee' } }}>
              <Link href="/#projects" passHref>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
              </Link>
            </Button>
            <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem', fontWeight: 'bold', '&:hover': { backgroundColor: '#7700ee' } }}>
              <Link href="/sponsor-us" passHref>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>Sponsor Us</a>
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