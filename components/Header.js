import React from 'react';
import { Box } from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{
                top: 10,
                left: 0,
                right: 0,
                height: '100vh', // Full height of the screen
                backgroundImage: 'url(https://i.postimg.cc/YqmTQRG5/team-photo.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1000, // Adjusted to bring the header to the front
                '::before': { // Add a pseudo-element for the purple filter
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(148, 53, 204, 0.2)', // Purple with 10% opacity
                    zIndex: -1, // Positioned behind the logo and text
                },
            }}
        >
            <img 
                src={'logoblack.png'} 
                alt="ThunderTech Robotics Logo"
                style={{
                    height: '20vh', // Adjust as needed
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    filter: 'invert(100%)', // Invert colors to make logo white
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    color: 'white',
                    fontFamily: 'Exo 2, sans-serif',
                    fontSize: '1.5rem',
                }}
            >
                <p>Innovating the Future</p>
            </Box>
        </Box>
    );
};

export default Header;
