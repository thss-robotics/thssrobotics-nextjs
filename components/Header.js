import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ height = '100px' }) => {
    return (
        <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: height,
            backgroundColor: 'rgba(148, 53, 204, 0.8)', // Purple color with 20% transparency
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            zIndex: 1000, // Ensuring it's above other elements
        }}
        >
            <Typography
                ml={5}
                variant="h6"
                sx={{
                    color: 'white',
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '3vh',
                    fontStyle: 'italic',
                    lineHeight: '3svh', 
                }}
            >
                ThunderTech <br/> Robotics
            </Typography>
        </Box>
    );
};

export default Header;
