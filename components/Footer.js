import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '1rem 0',
        marginTop: 'auto',
        width: '100%',
      }}
    >
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        THSS Robotics Team © {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
