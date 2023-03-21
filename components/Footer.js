import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: 'auto',
    padding: '1rem',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} THSS Robotics Team. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
