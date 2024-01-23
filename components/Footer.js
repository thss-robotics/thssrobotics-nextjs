import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Century+Gothic');
  </style>

  return (
    <Box
      sx={{
        backgroundColor: '#9435cc', // Updated to light purple background
        padding: '1rem',
        marginTop: 'auto',
        width: '100%',
        height: '300px', // Set the height to 500px
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: '"Exo 2", sans-serif', 
      }}
    >
      <Box sx={{ marginLeft: '15%' }}> {/* Left-aligned content with 15% margin */}
        <Typography
          variant="h5"
          mb={3}
          sx={{
            fontWeight: 'bold',
            color: 'white',
            fontFamily: '"Exo 2", sans-serif', 
          }}
        >
          Team 9719 ThunderTech Robotics
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontFamily: '"Exo 2", sans-serif',
            fontWeight: 'bold', 
          }}
        >
          Contact:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontFamily: '"Exo 2", sans-serif'
          }}
        >
          Email: thssrobotics@gmail.com<br />
          Phone: (778) 697-2907
        </Typography>
      </Box>


      <Box sx={{ marginRight: '15%' }}> {/* Right-aligned content with 15% margin */}
        <Typography
          variant="h5"
          mt={-7}
          sx={{
            fontWeight: 'medium',
            color: 'white',
            textAlign: 'right',
            fontFamily: '"Exo 2", sans-serif',  
          }}
        >
          This website was made by students.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <YouTubeIcon sx={{ color: 'white', marginRight: '0.5rem', fontSize: '3rem' }} /> {/* 5x larger icons */}
          <InstagramIcon sx={{ color: 'white', fontSize: '3rem' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
