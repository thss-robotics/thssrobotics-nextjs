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
              We are a robotics team at Thomas Haney Secondary School <br />
              We started out this year in 2023 and aim to compete in FRC 2024. We are working on
              small projects to learn teamwork and technical skills this year.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
