import React from 'react';
import SponsorForm from '../components/SponsorForm';
import { Typography, Box, Container, Grid, Link } from '@mui/material';

const SponsorPage = () => {
  return (
    <div>
      <Header />
      <h1>Sponsor Us</h1>
      <SponsorForm />
      <Footer />
    </div>
  );
};

export default SponsorPage;
