import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Typography, Box, Button } from '@mui/material';

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
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        backgroundImage: 'url(/team-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'white',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 'bold',
            paddingTop: '20%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          {displayText}
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: 'white',
            fontFamily: 'Anonymous Pro, sans-serif',
            paddingTop: '1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            maxWidth: '100vh',
            margin: 'auto',
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
            paddingTop: '2rem',
            fontSize: '2rem'
          }}
        >
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                fontFamily: 'inherit',
                color: 'white',
                marginRight: '3rem',
                borderColor: 'white',
                fontSize: 'inherit',
                padding: '0.5rem 1.5rem',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              About Us
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                color: 'white',
                fontFamily: 'inherit',
                borderColor: 'white',
                fontSize: 'inherit',
                padding: '0.5rem 1.5rem',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              Support Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
