import React from 'react';
import { Typography, Box, Container, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();

  const projectList = [
    {
      title: 'Claw for Humanity',
      description: 'A recycling robot designed to help with waste management and promote environmental sustainability.',
      image: '/images/claw_for_humanity.jpg',
      projectId: 'claw-for-humanity'
    },
    {
      title: 'FRC Practice Robot',
      description: 'A practice robot built to hone our skills and prepare for the FRC 2024 competition.',
      image: '/images/frc_2024_practice_robot.png',
      projectId: 'frc-2024-practice-robot'
    },
    {
      title: 'BuzzBot',
      description: "We're not quite sure what this is.",
      image: '/images/buzzbot.jpg',
      projectId: 'buzzbot'
    },
  ];
  

  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
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
            <Grid container spacing={3} justifyContent="center">
              {projectList.map((project, index) => (
                <Grid item xs={12} sm={6} md={10} key={index}>
                  <Card>
                    <CardActionArea onClick={() => handleProjectClick(project.projectId)}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontWeight: 'bold',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontFamily: 'Anonymous Pro, sans-serif',
                          }}
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
