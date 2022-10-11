import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT MATERIAL UI
import { Hidden } from '@mui/material';

function RegisterForm() {

  // THESE ARE OUR LOCAL STATE
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
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        {!username && !password && !email ? Hidden(<input className="btn" type="submit" name="submit" value="Register" />) :
        <input className="btn" type="submit" name="submit" value="Register" />}
      </div>
    </form>
  );
} // END OF RegisterForm

export default RegisterForm;
