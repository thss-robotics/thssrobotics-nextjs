// components/ProjectPage.jsx

import React from 'react';
import { Typography, Box, Container, Grid, Paper, CardMedia } from '@mui/material';

const ProjectPage = ({ project }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '30vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 'bold',
            }}
          >
            {project.title}
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="md">
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{
                marginBottom: '1rem',
                fontFamily: 'Anonymous Pro, sans-serif',
                marginTop: '2rem',
              }}
            >
              {project.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                borderRadius: 1,
                backgroundColor: 'white',
                fontFamily: 'Anonymous Pro, sans-serif',
                width: '100%',
              }}
            >
              <Typography variant="body1">{project.content}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectPage;
