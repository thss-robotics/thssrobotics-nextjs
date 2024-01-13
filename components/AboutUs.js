import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <Box
      id= "about-us"
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3rem',
      }}
    >
      <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ minHeight: '100%', textAlign: 'center' }}
      >
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                marginBottom: '1rem',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 'bold',
              }}
            >
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '1rem',
                fontFamily: 'Anonymous Pro, sans-serif',
                maxWidth: '80vw',
              }}
            >
              As a newly formed robotics team at Thomas Haney Secondary School, we embarked on our journey in 2023 with an ambition to win the First Robotics Competition this year.
              Our primary goal is to hone our teamwork and technical skills through projects that benefit our community.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
