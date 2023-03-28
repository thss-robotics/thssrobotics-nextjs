import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

const RecyclingProject = () => {
  return (
    <Container maxWidth="md" >
      <Typography variant="h2" align="center" gutterBottom>
        Recycling Identification and Sorting Robot
      </Typography>
      <Typography variant="h5">
        Our latest project focuses on creating a recycling identification and sorting robot that utilizes computer vision and machine learning algorithms to recognize and sort different types of recyclable materials.
      </Typography>
      <Typography align="center" style={{ marginTop: '2rem' }}>
        <Link href="/recycling/project-info" passHref>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Link>
      </Typography>
    </Container>
  );
};

export default RecyclingProject;
