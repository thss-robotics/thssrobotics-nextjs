import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OurMission = () => {
  // YouTube video ID
  const videoId = 'NNtOW1ePp_I';

  return (
    <Box
      id="about-us"
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        padding: '6rem 1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: '1rem',
                fontFamily: '"Exo 2", sans-serif',
                fontWeight: 'bold',
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Exo 2", sans-serif',
              }}
            >
              In short, we are Thunder Tech Robotics. Our goal is to inspire innovation in the future of STEAM. We need YOUR help to make this dream possible.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: '100%', height: '300px', overflow: 'hidden' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  objectFit: 'cover'
                }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMission;
