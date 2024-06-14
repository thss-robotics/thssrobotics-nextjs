import React from 'react';
import { Typography, Box, Container, Grid, Link } from '@mui/material';

const Sponsors = () => {
  const sponsorLogos = [
    'McFarlen Engineering.png',
    'firstlogo.png',
    'motorola.png',
    'OuterLimitsLOGO.png',
  ];
  const sponsorURLs = [
    'https://recaust.com/',
    'https://www.firstinspires.org/',
    'https://www.motorolasolutions.com/en_us/about/motorola-solutions-foundation.html',
    'https://outerlimitsclothing.ca/',
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
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '3rem',
                fontFamily: '"Exo 2", sans-serif', 
                maxWidth: '80vw',
               
              }}
            >
              In our endeavor, your support is invaluable. We are incredibly grateful for any form of contribution – whether it be monetary donations, tools, materials, or even expert advice. Join us in our mission to build, learn, and grow as we strive to leave a mark in the world of STEM. If you want to sponsor us, please email us; we will be happy to work something out with you.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '1rem',
                fontFamily: '"Exo 2", sans-serif', 
                fontWeight: 'bold',
              }}
            >
              Heartfelt Thanks to All Our Supporters:
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
