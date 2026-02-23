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

const FRC2025RobotInfo = () => {

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
                                            src={`/images/2025robotGallery/${img}`}
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
                                FRC 2025 Robot
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Exo 2", sans-serif',
                                }}
                            >
                                In 2025, our robot faced significant software challenges that affected rotational positioning and acceleration on the field. During early events, the robot struggled with inconsistent heading control, overshoot during turns, and unpredictable acceleration curves. These issues reduced driver confidence and created inconsistencies in both autonomous routines and teleoperated performance.
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Exo 2", sans-serif',
                                    marginTop: '1rem',
                                }}
                            >
                                Much of the season was spent diagnosing and refining our control systems. We reworked portions of our codebase, improved feedback handling, tuned control loops, and gathered match data to identify failure points. Through structured testing and incremental adjustments, we gradually eliminated rotational drift and stabilized acceleration behavior. Each iteration brought measurable improvements in responsiveness and precision.
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Exo 2", sans-serif',
                                    marginTop: '1rem',
                                }}
                            >
                                By the end of the season, the robot achieved smooth, predictable movement and dependable field performance. Drivers were able to maneuver confidently and execute precise scoring actions. In addition, our elevator design performed exceptionally well, consistently reaching scoring positions and handling game elements with reliability. It successfully scored coral and removed algae throughout competition, contributing significantly to our overall effectiveness. Overcoming our early software setbacks ultimately resulted in a stable, reliable robot we could trust in high pressure matches.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default FRC2025RobotInfo;