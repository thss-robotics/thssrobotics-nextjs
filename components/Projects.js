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
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            marginBottom: '3rem',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center', 
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea onClick={() => handleProjectClick(project.projectId)}>
                <CardMedia
                  component="img"
                  height="240" 
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}> 
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
      </Container>
    </Box>
  );
};

export default Projects;
