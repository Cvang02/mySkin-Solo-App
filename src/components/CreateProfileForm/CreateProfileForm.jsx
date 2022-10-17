// IMPORT REACT
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT
import AddProfileImage from './AddProfileImage.jsx';

// IMPORT MATERIAL UI
import { Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function CreateProfileForm() {

    // THESE ARE OUR LOCAL STATE
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // USE-SELECTOR
    const errors = useSelector((store) => store.errors);
    const userInfo = useSelector(store => store.userInfoReducer);
    const profileInfo = useSelector(store => store.profileImageReducer);
    
    // USE-DISPATCH
    const dispatch = useDispatch();
    // USE-HISTORY
    const history = useHistory();

    // HANDLE SUBMIT BUTTON
  const registerUser = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: userInfo.username,
        password: userInfo.password,
        email: userInfo.email,
        first_name: firstName,
        last_name: lastName,
        profile_url: profileInfo.profile_url
      },
    });
    history.push('/user')
  }; // end registerUser

  // HANDLE THE BACK BUTTON
  const BackPage = (event) => {
    event.preventDefault();
    history.push('/registration')
  }

  return (
    <form onSubmit={registerUser}>
  <Stack             
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={1}
  >
    <Typography>Create User Profile</Typography>
    {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
    <AddProfileImage />
    <TextField 
      id="firstname"
      label="First Name"
      type="text"
      name="firstName"
      value={firstName}
      required
      onChange={(event) => setFirstName(event.target.value)}
      fullWidth
    />
    <TextField 
      id="lastname"
      label="Last Name"
      type="text"
      name="lastName"
      value={lastName}
      required
      onChange={(event) => setLastName(event.target.value)}
      fullWidth
    />
    <Button variant="contained" type="submit" name="submit" onClick={BackPage} value="back">Back</Button>
    <Button variant="contained" type="submit" name="submit" value="Register">Register</Button>
  </Stack>
</form>
  );
} // END OF CreateProfileForm

export default CreateProfileForm;