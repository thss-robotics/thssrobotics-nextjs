import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Container, Grid } from '@mui/material';

import AboutUs from '../components/AboutUs';
import Sponsors from '../components/Sponsors';
import Projects from '../components/Projects';

const Home = () => {
  // ... existing useState and useEffect

  return (
    <div>
      <Box
        sx={{
          position: 'relative', // Changed for positioning the text
          top: 0,
          left: 0,
          right: 0,
          height: '80vh',
          backgroundImage: 'url(https://i.postimg.cc/YqmTQRG5/team-photo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1000,
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(148, 53, 204, 0.4)', // Adjusted opacity
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h2" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 'bold' }}>
            Team 9719 - ThunderTech Robotics
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif' }}>
            Empowering Innovation and Teamwork in Robotics Technology
          </Typography>
        </Box>
      </Box>

      <AboutUs />

      <Projects />

      <Sponsors />

    </div>
  );
};

export default Home;
