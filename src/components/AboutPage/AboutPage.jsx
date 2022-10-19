import { Typography } from '@mui/material';
import React from 'react';

import './About.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="About">
      <Typography 
        variant='h4'
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        What is $(mySkin)?
      </Typography>
      <br></br>
      <br></br>
      <Typography 
        variant='h5'
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Have you spent so much money on skincare products but don’t see any improvement? 
        Did you buy a new skin care product and want to see if it works? Or are you new 
        to skin care and just want to see your improvement overtime? Well, no need to fret 
        any longer because I got you covered. 
      </Typography>
      <br></br>
      <br></br>
      <Typography 
        variant='h5'
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        (Bling) $(mySkin) is an innovative, state-of-the-art, breaking new ground, original, 
        cutting-edge app that lets you keep track of your skin care process through the means of taking and 
        uploading pictures of your face profile. This will let you see a series of photo 
        timeline of your skin condition and if the skincare products you are currently 
        using are working or not. You also have the option to add any skincare product 
        that you are currently using, have used in the past or are looking to use in the 
        future into a list of products in its own section page. This is to help you keep 
        track of your skincare product to let you determine if the product is worth keeping 
        or scraping it. 
      </Typography>
    </div>
  );
}

export default AboutPage;
