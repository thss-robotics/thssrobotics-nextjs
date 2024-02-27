import React from 'react';
import { Box, useMediaQuery, useTheme, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const openSponsorForm = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenForm(false);
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
            }}
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
                    <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={openSponsorForm}>Sponsor Us</Button> 
                </Box>
      )}

      <Dialog open={openForm} onClose={handleClose}>
        <DialogTitle>Fill out the form to sponsor us</DialogTitle>
        <DialogContent>
          {<SpnsorForm.js/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Header;
