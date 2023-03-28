import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Typography, Box, Button, Container, Grid } from '@mui/material';

import AboutUs from '../components/AboutUs';
import Sponsors from '../components/Sponsors';

const Home = () => {
  const [displayText, setDisplayText] = useState('WE ARE THSS ROBOTICS');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) =>
        prevText === 'WE ARE THSS ROBOTICS' ? 'WE ARE THE BEST' : 'WE ARE THSS ROBOTICS'
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container maxWidth="false" disableGutters>
      <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                height: { xs: '50%', md: '100%' },
                minHeight: { xs: '400px', md: 'auto' },
                backgroundImage: 'url(/team-photo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: { xs: '50%', md: '100%' },
                minHeight: { xs: '500px', md: 'auto' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: '2rem',
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: 'black',
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                {displayText}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: 'black',
                  fontFamily: 'Anonymous Pro, sans-serif',
                  marginBottom: '2rem',
                }}
              >
                THSS Robotics Team is dedicated to building innovative robots while fostering
                teamwork, creativity, and learning. Join us on our journey to change the world,
                one robot at a time!
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    whiteSpace: 'nowrap',
                    fontFamily: 'inherit',
                    color: 'black',
                    marginRight: '2rem',
                    borderColor: 'black',
                    fontSize: 'inherit',
                    padding: '0.5rem 1.5rem',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
                    
                  }}
                >
                  About Us
                </Button>
                <Link href="mailto: thssrobotics@gmail.com?subject=Support for the THSS Robotics Team&body=My name is [Your Name] and I'm reaching out to express our interest in supporting your FRC robotics team.">
                  <Button
                    variant="outlined"
                    color="inherit"
                    ///onClick={() => document.getElementById('sponsors').scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      whiteSpace: 'nowrap',
                      color: 'black',
                      fontFamily: 'inherit',
                      borderColor: 'black',
                      fontSize: 'inherit',
                      padding: '0.5rem 1.5rem',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
                    }}
                  >
                    Support Us
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>


      <AboutUs />
 

      <Sponsors />

    </div>
  );
};

export default Home;
