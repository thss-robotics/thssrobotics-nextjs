import React from 'react';
import { Typography, Box, Container, Grid, Link } from '@mui/material';

const Sponsors = () => {
  const sponsorLogos = [
    'sponsor1.png',
    'sponsor2.jpg',
    'sponsor3.jpg',
  ];
  const sponsoURLs = [
    'https://www.stryker.com',
    'http://dear-forest.com/portfolio/knuh-beacon-map/',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  ];
  return (
    <Box
      id="sponsors"
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '1rem',
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
              Sponsor Us
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
              In our endeavor, your support is invaluable. We are incredibly grateful for any form of contribution – whether it be monetary donations, tools, materials, or even expert advice. Join us in our mission to build, learn, and grow as we strive to leave a mark in the realm of robotics.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sponsors;
