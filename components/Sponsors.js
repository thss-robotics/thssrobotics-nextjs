import React from 'react';
import { Typography, Box, Container, Grid, Link, Button } from '@mui/material';

const Sponsors = () => {
  const sponsorLogos = [
    'McFarlen Engineering.png', // 2024
    'firstlogo.png', // 2024
    'motorola.png', // 2024
    'OuterLimitsLOGO.png', // 2024
    'TDSLogo.png', // 2025
    'Pitt-Meadows-Plumbing-Logo.png' // 2025
  ];
  const sponsorURLs = [
    'https://recaust.com/',
    'https://www.firstinspires.org/',
    'https://www.motorolasolutions.com/en_us/about/motorola-solutions-foundation.html',
    'https://outerlimitsclothing.ca/',
    'https://tdsys.ca/',
    'https://pittmeadows.net/',

  ];

  return (
    <Box
      id="sponsors"
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        padding: '6rem 0rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ minHeight: '100%', textAlign: 'center' }}
        >
          {/* Our Sponsors Title */}
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                marginBottom: '1rem',
                fontFamily: '"Exo 2", sans-serif', 
                fontWeight: 'bold',
              }}
            >
              Our Sponsors
            </Typography>
          </Grid>

          {/* Sponsorship Description */}
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '0.2rem',
                fontFamily: '"Exo 2", sans-serif', 
                maxWidth: '80vw',
              }}
            >
              In our endeavor, your support is invaluable. We are incredibly grateful for any form of contribution – whether it be monetary donations, tools, materials, support, or even expert advice. Join us in our mission to build, learn, and grow as we strive to leave a mark in the realm of robotics and build a STEAM orianted community. If you want to sponsor us, please email us; we will be happy to work something out.
            </Typography>
          </Grid>

          {/* Join The List Button */}
          <Grid item>
          <Button 
           variant="contained" 
           href="/sponsor-us" 
           target="_blank"
           sx={{
             marginBottom: '4rem',
             fontFamily: '"Exo 2", sans-serif',
             backgroundColor: '#8800ff', // This sets the button color
             '&:hover': {
               backgroundColor: '#7700ee', // Optional: change color slightly on hover
             },
             padding: '0.5rem 2rem',
           }}
          >
             Sponsor Us!
          </Button>
          </Grid>
          
          {/* Heartfelt Individual Thanks Text */}
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '0.5rem',
                fontFamily: '"Exo 2", sans-serif', 
                fontWeight: 'bold',
              }}
            >
              Heartfelt Thanks to All Our Individual Supporters:
            </Typography>
          </Grid>

          {/* Individual sponsors */}
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '6rem',
                fontFamily: '"Exo 2", sans-serif', 
                maxWidth: '80vw',
              }}
            >
              There are many individual sponsors who wish to remain anonymous at this time.
            </Typography>
          </Grid>
          
          {/* Heartfelt Corporate Thanks Text */}
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '0.5rem',
                fontFamily: '"Exo 2", sans-serif', 
                fontWeight: 'bold',
              }}
            >
              Thanks to All Our Corporate Supporters:
            </Typography>
          </Grid>
          
          {/* Sponsor Logos */}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={6}
              >
              {sponsorLogos.map((logo, index) => (
                <Grid item key={logo}>
                  <Link href={sponsorURLs[index]} target="_blank">
                    <img src={logo} alt={`Sponsor ${index + 1}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />
                  </Link>
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
