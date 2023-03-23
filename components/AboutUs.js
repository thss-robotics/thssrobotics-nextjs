import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: '3rem 0', backgroundColor: '#f5f5f5',}}>
        <Typography variant="h3" align="center" sx={{ marginBottom: '1rem', fontFamily: 'Orbitron, sans-serif', fontWeight: 'bold', }}>
        About Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '1rem', fontFamily: 'Anonymous Pro, sans-serif', maxWidth: '80vh', }}>
            We are a robotics team at Thomas Haney Secondary School <br></br>
            We started out this year in 2023 and aim to compete in FRC 2024. We are working on small projects to learn teamwork and technical skills this year.
        </Typography>
        </Box>
    </Box>
  );
};

export default AboutUs;