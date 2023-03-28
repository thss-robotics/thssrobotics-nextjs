import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Gallery from 'react-photo-gallery';

const Projects = ({ photos }) => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3rem',
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
              Projects
            </Typography>
          </Grid>
          <Grid item>
            <Gallery photos={photos} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
