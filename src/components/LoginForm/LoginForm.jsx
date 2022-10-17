import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

// IMPORT MATERIAL UI
import { Button, Hidden, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

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
<form onSubmit={login}>
  <Stack             
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={1}
  >
    <Typography>Login</Typography>
    {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
    <TextField 
      id="username"
      label="Username"
      type="text"
      name="username"
      required
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      fullWidth
    />
    <TextField 
      id="password"
      label="Password"
      type="password"
      name="password"
      required
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      fullWidth
    />
    <Button variant="contained" type="submit" name="submit" value="Log In">Log In</Button>
  </Stack>
</form>
  );
}

export default LoginForm;
