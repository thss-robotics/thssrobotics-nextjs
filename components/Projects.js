import React from 'react';
import { Typography, Box, Container, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();

  const projectList = [
    {
      title: 'Topographic Holobox',
      description: "A holographic sandbox for teaching topology.",
      image: 'holobox.jpg',
      projectId: 'holobox',
      link: 'https://www.sd42.ca/district-highlight/secondary-students-augmented/'
    },
    {
      title: 'Claw for Humanity',
      description: 'A recycling robot designed to help with waste management and promote environmental sustainability.',
      image: 'claw_for_humanity2.jpg',
      projectId: 'CFH',
      link: 'https://youtu.be/3zYi_7Qy-Lk'
    },
    {
      title: 'FRC 2024 Practice Bot',
      description: 'A practice robot built to hone our skills and prepare for the FRC 2024 competition.',
      image: 'newrobotimg.jpg',
      projectId: 'frc-2024-practice-robot',
      link: 'https://www.youtube.com/watch?v=8kwPYAN-gxQ'
    },
    {
      title: 'FRC Swerve Drivetrain',
      description: 'Swerve drive is a sophisticated drivetrain system where each wheel can independently rotate and drive, enabling omnidirectional movement and unmatched agility.',
      image: 'swervedrive.jpg',
      projectId: 'FRC-Swerve-Drivetrain',
      link: '/SwerveDrive'
    },
    {
      title: 'FRC 2025 Robot',
      description: 'In 2025, software issues affected rotation and acceleration, but after refinement we achieved reliable performance, and our elevator consistently scored coral and removed algae.',
      image: 'robot2025.jpg',
      projectId: 'FRC-2025-Robot',
      link: '/FRC2025Robot'
    }
          
  ];
  /*{
      title: 'Who We Are',
      description: 'A brief video talking about who we are and why we need your help.',
      image: '/images/newrobotimg.jpg',
      projectId: 'ttr-2024-promo',
      link: 'https://www.youtube.com/watch?v=NNtOW1ePp_I'
    },   */
  /*{
      title: 'BuzzBot',
      description: "We're not quite sure what this is.",
      image: '/images/buzzbot.jpg',
      projectId: 'buzzbot'
     },   */
  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      router.push(`/projects/${project.projectId}`);
    }
  };
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        padding: '6rem 1rem',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            marginBottom: '3rem',
            fontFamily: '"Exo 2", sans-serif',
            fontWeight: 'bold',
            textAlign: 'left', 
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={5}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea onClick={() => handleProjectClick(project)}>
                <CardMedia
                  component="img"
                  height="240" 
                  image={`/images/projectCovers/${project.image}`}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}> 
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: '"Exo 2", sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"Exo 2", sans-serif',
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
