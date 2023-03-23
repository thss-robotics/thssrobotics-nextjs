import React from 'react';
import { Typography, Box, Grid, Avatar } from '@mui/material';

const TeamMembers = () => {
  const members = [
    { name: 'Matvey', role: 'Software Team Lead', img: '/matvey.jpg' },
    { name: 'Eric', role: 'Build Team Lead', img: '/eric.jpg' },
    { name: 'Logan', role: 'Electronics Team Lead', img: '/logan.jpg' },
    { name: 'Someone', role: 'Manufacturing Team Lead', img: '/other.jpg' },
  ];

  return (
    <Box sx={{ padding: '3rem 0' }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: '1rem', fontFamily: 'Orbitron, sans-serif', fontWeight: 'bold' }}>
        Team Members
      </Typography>
      <Grid container spacing={1} justifyContent="center" >
        {members.map((member, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{ marginRight: '-10rem', marginLeft: '-10rem'}}>
            <Box sx={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar src={member.img} alt={member.name} sx={{ width: 250, height: 250 }} />
              <Typography variant="h4" align="center" sx={{ marginTop: '1rem', fontFamily: 'Anonymous Pro, sans-serif' }}>
                {member.name}
              </Typography>
              <Typography variant="h5" align="center" sx={{ marginTop: '0.5rem', fontFamily: 'Anonymous Pro, sans-serif' }}>
                {member.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMembers;
