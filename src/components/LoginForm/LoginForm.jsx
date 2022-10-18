// IMPORT REACT
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

// IMPORT MATERIAL UI
import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/home">
        Chameng Vang
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
      <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
      >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">Login</Typography>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <Box component="form" noValidate onSubmit={login} sx={{ mt: 1 }}>
        <TextField 
          id="username"
          label="Username"
          type="text"
          name="username"
          margin="normal"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
          fullWidth
        />
        <TextField 
          id="password"
          label="Password"
          type="password"
          name="password"
          margin="normal"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          fullWidth
        />
        <Button
          value="Log"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/registration" variant="body2">
              {"Don't have an account? Sign Up!"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  ); // END OF return

} // END OF LoginForm

export default LoginForm;

