import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT
import GetPost from './GetPost';

// IMPORT MATERIAL UI
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

function UserPage() {
  
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
   // USE-HISTORY
   const history = useHistory();

  return (
    <Box>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <IconButton aria-label="settings" onClick={() => history.push(`/add-post`)}>
            <AddAPhotoIcon />
        </IconButton>
        <GetPost />
      </Stack>
      {/* <LogOutButton className="btn" /> */}
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
