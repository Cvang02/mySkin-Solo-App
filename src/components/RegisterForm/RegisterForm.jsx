// IMPORT REACT
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT MATERIAL UI
import { Button, Hidden, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

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
    <>
<form onSubmit={registerUser}>
  <Stack             
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={1}
  >
    <Typography>Register User</Typography>
    {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
    <TextField 
      id="username"
      label="Username"
      type="text"
      name="username"
      value={username}
      required
      onChange={(event) => setUsername(event.target.value)}
      fullWidth
    />
    <TextField 
      id="password"
      label="Password"
      type="password"
      name="password"
      value={password}
      required
      onChange={(event) => setPassword(event.target.value)}
      fullWidth
    />
    <TextField 
      id="email"
      label="Email"
      type="text"
      name="email"
      value={email}
      required
      onChange={(event) => setEmail(event.target.value)}
      fullWidth
    />
      <div>
        {!username && !password && !email ? Hidden(<Button variant="contained" type="submit" name="submit" value="Register">Register</Button>) :
        <Button variant="contained" type="submit" name="submit" value="Register">Register</Button>}
      </div>
  </Stack>
</form>
</>
  );
} // END OF RegisterForm

export default RegisterForm;