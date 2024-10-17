import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Container, Grid } from '@mui/material';

import AboutUs from '../components/AboutUs';
import Sponsors from '../components/Sponsors';
import Projects from '../components/Projects';
import OurMission from '../components/OurMission';
import Header from '../components/Header';



const Home = () => {
    return (      
     

      <div>
        {/* only nerds would be looking here, you nerd. here is a neerdy easter egg hunt, enjoy the code!
        Shhh... Don't tell anyone! You've found 1/5 Easter eggs! 🐣 */}
        <Box
          sx={{
           position: 'relative', // Changed for positioning the text
            top: 0,
            left: 0,
            right: 0,
            height: '800px',
           // backgroundImage: 'url(https://i.postimg.cc/g0GHz2jZ/cover.jpg)',
            backgroundImage: 'url(https://i.postimg.cc/j5nc2RMz/20240302-163146.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1000,
            '::before': {
             content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
             bottom: 0,
              backgroundColor: 'rgba(136, 0, 255, 0.4)', // Adjusted opacity
              zIndex: -1,
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                whiteSpace: 'nowrap', // Prevents the text from wrapping
               overflow: 'hidden', // Hides overflowed text
                textOverflow: 'ellipsis', // Adds an ellipsis to overflowed text
                fontFamily: '"Exo 2", sans-serif', 
                fontWeight: 'bold',
                fontSize: { xs: '9vw', sm: '9vw', md: '7vw', lg: '4.5rem' ,}, 
              }}
            >
              ThunderTech Robotics
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: '"Exo 2", sans-serif',
                fontSize: { xs: '5vw', sm: '3vw', md: '2.5vw', lg: '1.5rem' ,}, // Responsive font size
              }}
            >
              Empowering Innovation and Teamwork in Robotics Technology
            </Typography>
          </Box>

        </Box>

        <AboutUs />

        <OurMission />

        <Projects />

        <Sponsors />

      </div>  
  
  );  
};

export default Home;
