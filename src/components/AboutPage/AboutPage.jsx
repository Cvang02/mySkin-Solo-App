import { Typography } from '@mui/material';
import React from 'react';

import './About.css';

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
      <br></br>
      <br></br>
      <Typography variant='h6' sx={{fontFamily: 'monospace', fontWeight: 700}}>
        Challenges:
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Uploading to Cloudinary
      </Typography>
      <br></br>
      <br></br>
      <Typography variant='h6' sx={{fontFamily: 'monospace', fontWeight: 700}}>
        Future Expectation for this app:
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Search Friend List 
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Mobile Version
      </Typography>
      <br></br>
      <br></br>
      <Typography variant='h6' sx={{fontFamily: 'monospace', fontWeight: 700}}>
        This app was built with:
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Axios
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Bcryptjs
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Cloudinary
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Dotenv
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Luxon
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Cloudinary
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Material UI
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Passport
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - PG
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - React
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Redux - Saga
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Sweetalert2
      </Typography>
      <Typography variant='overline' sx={{fontFamily: 'monospace',}}>
        *Please read `package.json` for the full list of dependencies.
      </Typography>
      <br></br>
      <br></br>
      <Typography variant='h6' sx={{fontFamily: 'monospace', fontWeight: 700}}>
        Acknowledgement
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Thanks to everyone in the L'engle cohort who supported and help me with this project.
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - Thanks to my family and friends with daily support.
      </Typography>
      <br></br>
      <Typography variant='h5' sx={{fontFamily: 'monospace', fontWeight: 700}}>
        Support 
      </Typography>
      <Typography variant='subtitle1' sx={{fontFamily: 'monospace',}}>
        - If you have any suggestions or issues, please email me at chameng.vang@outlook.com
      </Typography>
    </div>
  );
}

export default AboutPage;
