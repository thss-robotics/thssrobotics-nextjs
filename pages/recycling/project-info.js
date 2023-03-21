import React from 'react';
import { Container, Typography } from '@mui/material';

const ProjectInfo = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Project Details
      </Typography>
      <Typography variant="h5">
        The Recycling Identification and Sorting Robot project aims to tackle the growing problem of waste management. Our robot uses computer vision algorithms to identify different types of recyclable materials such as plastic, paper, and metal. Once identified, the robot sorts these materials into corresponding bins for easy recycling. This project not only helps the environment but also educates the community about the importance of recycling and proper waste management.
      </Typography>
    </Container>
  );
};

export default ProjectInfo;
