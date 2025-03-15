import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'black' }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

function BackArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'black' }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );
}

const AboutUs = () => {
  
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />,
  };

  // Assuming you have an array of image names
  const galleryImages = ['image1.png', 'image2.jpg', 'image3.jpg']; 

  return (
    <>
      <style>
          {`
            .slick-next:before, .slick-prev:before {
              content: none !important;
            }
          `}
      </style>
      <Box
        id="about-us"
        sx={{
          backgroundColor: '#ffffff',
          minHeight: '400px',
          display: 'flex',
          justifyContent: 'center',
          padding: '6rem 1rem',
        }}
      >
        <Container maxWidth="lg"> 
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6}>
              <Slider {...settings}> 
                {galleryImages.map((img, index) => (
                  <Box key={index} sx={{ maxWidth: '100%', height: '300px', overflow: 'hidden' }}> {/* Set a fixed height */}
                    <img 
                      src={`/gallery/${img}`} 
                      alt={`Gallery ${index}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover' // Ensures the image covers the box
                      }} 
                    />
                  </Box>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} md={6}> {/* Adjusted grid sizing for text */}
              <Typography
                variant="h3"
                sx={{
                  marginBottom: '1rem',
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 'bold',
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: '1rem',
                  fontFamily: '"Exo 2", sans-serif',
                }}
              >
                As a newly formed robotics team at Thomas Haney Secondary School, we embarked on our journey in 2023 with an ambition to compete at the First Robotics Competition in 2024.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                }}
              >
                Our mission is to hone our teamwork and technical skills through projects that benefit our community. Now, we seek financial support to make it to FRC in 2026. As a team we believe that locally we have the opportunity to create a STEAM based community in Maple Ridge, and put the local high schools at the forefront of innovation.
              </Typography>
            </Grid>
          </Grid>
        </Container>
     </Box>
     </>
  );
};

export default AboutUs;
