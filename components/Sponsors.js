import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

const Sponsors = () => {
  const sponsorLogos = [
    'sponsor1.png',
    'sponsor2.jpg',
    'sponsor3.jpg',
  ];
  return (
    <Box
      id="sponsors"
      sx={{
        backgroundColor: '#fffff',
        minHeight: '300px',
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
              Sponsors
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2} justifyContent="center">
              {sponsorLogos.map((logo, index) => (
                <Grid item key={index} xs={6} sm={4} md={3}>
                  <img src={logo} alt="Sponsor logo" style={{ maxWidth: '100%' }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sponsors;
