import React from 'react';
import { Box, Button } from '@mui/material';

const Header = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            sx={{
                position: 'absolute', // Changed from 'static' to 'absolute'
                top: 0, // Align to the top of the screen
                left: 0, // Align to the left of the screen
                width: '100%', // Ensure it spans the full width
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2rem 2.5rem',
                backgroundColor: 'transparent',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                zIndex: 1100, // Ensure it's above other content
            }}
        >
            <img 
                src={'logoblack.png'} 
                alt="ThunderTech Robotics Logo"
                style={{
                    height: '70px',
                    filter: 'invert(100%)',
                }}
            />
            <Box>
                <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('about-us')}>About Us</Button>
                <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('projects')}>Projects</Button>
                <Button sx={{ margin: '0 1rem', color: 'white', fontFamily: '"Exo 2", sans-serif', fontSize: '1.2rem' }} onClick={() => scrollToSection('sponsors')}>Sponsor Us</Button>
            </Box>
        </Box>
    );
};

export default Header;
