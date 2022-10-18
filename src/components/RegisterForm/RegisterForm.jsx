// IMPORT REACT
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

function RegisterForm() {

  // USE - STATE
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // USE-SELECTOR
  const errors = useSelector((store) => store.errors);
  // USE-DISPATCH
  const dispatch = useDispatch();
  // USE-HISTORY
  const history = useHistory();

  // REGISTER HANDLE SUBMIT
  const registerUser = (event) => {
    event.preventDefault();
    if (!username || !password || !email) return;
    dispatch({
      type: 'REDUCER_USER',
      payload: {
        username: username,
        password: password,
        email: email,
      },
    });
    history.push('/createProfile')
  }; // END OF registerUser

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
      <Typography component="h1" variant="h5">Register User</Typography>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
      <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 1 }}>
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
        <TextField 
          id="email"
          label="Email"
          type="text"
          name="email"
          margin="normal"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          fullWidth
        />
        <Button
          value="Register"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/login" variant="body2">
              {"Already have an account? Login"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
} // END OF RegisterForm

export default RegisterForm;




