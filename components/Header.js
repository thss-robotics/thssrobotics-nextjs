import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ height = '42px' }) => {
    return (
        <Box
            sx={{
                height: height,
                backgroundColor: '#3f51b5', // Default AppBar color; adjust if needed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: 'white',
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '3vh',
                    fontStyle: 'italic',
                    lineHeight: height,  // To ensure the text is vertically centered
                }}
            >
                ThunderTech Robotics
            </Typography>
        </Box>
    );
};

export default Header;
