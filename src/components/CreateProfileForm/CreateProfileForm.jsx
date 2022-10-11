import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CreateProfileForm() {
    // THESE ARE OUR LOCAL STATE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

    // USE-SELECTOR
    const errors = useSelector((store) => store.errors);
    const userInfo = useSelector(store => store.userInfoReducer);
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
        last_name: lastName
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
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Create User Profile</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" onClick={BackPage} value="back" />
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
} // END OF CreateProfileForm

export default CreateProfileForm;