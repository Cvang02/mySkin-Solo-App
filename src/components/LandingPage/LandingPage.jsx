import React from 'react';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

// IMPORT MATERIAL UI
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function LandingPage() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://media.istockphoto.com/photos/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves-picture-id1136422297?k=20&m=1136422297&s=612x612&w=0&h=fk-Du8-BxBYn4rtint_HULFN5FpUWNeaBQye9DoSzpc=)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <RegisterForm />
      </Grid>
    </ThemeProvider>
  );
}

export default LandingPage;