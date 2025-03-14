import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css"; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";

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

const SwerveDriveInfo = () => {

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
    const galleryImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

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
                                    <Box key={index} sx={{ maxWidth: '100%', height: '450px', overflow: 'hidden' }}>
                                        <img
                                            src={`/images/swerveGallery/${img}`}
                                            alt={`Gallery ${index}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Slider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h3"
                                sx={{
                                    marginBottom: '1rem',
                                    fontFamily: '"Exo 2", sans-serif',
                                    fontWeight: 'bold',
                                }}
                            >
                                FRC Swerve Drivetrain
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Exo 2", sans-serif',
                                }}
                            >
                                Swerve drive is a sophisticated drivetrain system where each wheel can independently rotate and drive, enabling omnidirectional movement and unmatched agility.
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Exo 2", sans-serif',
                                    marginTop: '1rem',
                                }}
                            >
                                We are using MK4i modules with REV NEO Vortex motors to achieve this advanced drivetrain configuration. We hope to build a second drive train to test our code on and fine tune to the drivers liking while the hardware team works on the main robot.
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Exo 2", sans-serif',
                                    marginTop: '1rem',
                                }}
                            >
                                Our swerve modules equipped with the Neo Vortex motors achieves a speed of 17.6 ft/s at a gear ratio of 6.75:1. The Neo Vortex motors have a free speed of 6,784 RPM, providing excellent acceleration and top-end performance. This configuration balances speed and torque, making it suitable for high-performance FIRST robotics drivetrains.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default SwerveDriveInfo;