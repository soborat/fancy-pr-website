import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Slider from 'react-slick';
import reviews from '../data/reviews';

function ReviewsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <Box
          key={index}
          display='flex!important'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          p={2}
          mx='auto'
        >
          <Avatar
            alt={`Avatar ${index + 1}`}
            src={review.avatar}
            style={{ width: 80, height: 80 }}
          />
          <Typography variant='h6' gutterBottom>
            {review.title}
          </Typography>
          <Typography variant='body2'>{review.text}</Typography>
        </Box>
      ))}
    </Slider>
  );
}

export default ReviewsCarousel;
