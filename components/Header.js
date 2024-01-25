import React from 'react';
import { Box, useMediaQuery, useTheme, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
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
                }}
            />
            {isMobile ? (
                <IconButton
                    sx={{ position: 'absolute', right: '10px' }}
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
            ) : (
                <Box>
                    <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.5rem' }} onClick={() => scrollToSection('about-us')}>About Us</Button>
                    <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.5rem' }} onClick={() => scrollToSection('projects')}>Projects</Button>
                    <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.5rem' }} onClick={() => scrollToSection('sponsors')}>Sponsor Us</Button>
                </Box>
            )}
        </Box>
    );
};

export default Header;
