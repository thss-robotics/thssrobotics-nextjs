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
                    <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() =><form id="emailForm">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br>
  <label for="message">Message:</label><br>
  <textarea id="message" name="message"></textarea><br>
  <input type="submit" value="Submit">
</form>}>Sponsor Us</Button>
                </Box>
            )}
        </Box>
    );
};

export default Header;
