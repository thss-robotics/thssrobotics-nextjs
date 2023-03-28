import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#808080',
        padding: '1rem 0',
        marginTop: 'auto',
        width: '100%',
      }}
    >
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: '#ffffff',
          fontFamily: 'Anonymous Pro, sans-serif',
        }}
      >
        THSS Robotics Team © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
