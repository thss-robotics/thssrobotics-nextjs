import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

const SwerveDriveInfo = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        padding: '6rem 1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <img 
              src="/images/swervedrive.jpg" 
              alt="Swerve Drive" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                objectFit: 'cover' 
              }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: '1rem',
                fontFamily: '"Exo 2", sans-serif',
                fontWeight: 'bold',
              }}
            >
              FRC Swerve Drivetrain
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Exo 2", sans-serif',
              }}
            >
              Swerve drive is a sophisticated drivetrain system where each wheel can independently rotate and drive, enabling omnidirectional movement and unmatched agility.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Exo 2", sans-serif',
                marginTop: '1rem',
              }}
            >
              We are using MK4i modules with REV NEO Vortex motors to achieve this advanced drivetrain configuration. We hope to build a second drive train to test our code on and fine tune to the dirvers liking while the hardware team works on the main robot.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SwerveDriveInfo;