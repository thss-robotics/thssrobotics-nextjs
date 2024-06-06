import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#8800ff',
        marginTop: 'auto',
        width: '100%',
        fontFamily: '"Exo 2", sans-serif',
      }}
    >
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', height: { xs: '400px', md: '300px' }}}>
        
        {/* Left-aligned content */}
        <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: '0%', md: '15%' }, textAlign: { xs: 'center', md: 'left' }}}>
          <Typography
            variant="h5"
            mb={3}
            sx={{
              fontWeight: 'bold',
              color: 'white',
              fontFamily: '"Exo 2", sans-serif',
            }}
          >
            Team 9719 ThunderTech Robotics
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontFamily: '"Exo 2", sans-serif',
              fontWeight: 'bold',
            }}
          >
            Contact:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontFamily: '"Exo 2", sans-serif'
            }}
          >
            Email: 
            <Link href="mailto:thssrobotics@gmail.com" sx={{ color: 'white', marginLeft: '0.5rem' }}>
              thssrobotics@gmail.com
            </Link>
            <br />
            Phone: 
            <Link href="tel:+17786972907" sx={{ color: 'white', marginLeft: '0.5rem' }}>
              (778) 697-2907
            </Link>
          </Typography>
        </Grid>


        <Grid item xs={12} md={6} sx={{ paddingRight: { xs: '0%', md: '15%' }, textAlign: { xs: 'center', md: 'right' }, marginTop: '5rem' }}>
          <Typography
            variant="h5"
            mt={-12}
            sx={{
              fontWeight: 'medium',
              color: 'white',
              fontFamily: '"Exo 2", sans-serif',
            }}
          >
            This website was made by students.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontFamily: '"Exo 2", sans-serif',
            }}
          >
            Inspired by 
            <Link href="https://www.team2706.ca/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', marginLeft: '0.5rem' }}>
              Merge Robotics
            </Link>.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, marginTop: '2rem' }}>
            <Link href="https://www.youtube.com/@thundertechrobotics" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon sx={{ color: 'white', marginRight: '0.5rem', fontSize: '3rem' }} />
            </Link>
            <Link href="https://www.instagram.com/thundertech.robotics/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: 'white', fontSize: '3rem' }} />
            </Link>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Footer;
