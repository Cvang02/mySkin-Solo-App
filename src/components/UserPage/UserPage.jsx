// IMPORT REACT
import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT
import GetPost from './GetPost';
import './Post.css';
// import LogOutButton from '../LogOutButton/LogOutButton';

// IMPORT MATERIAL UI
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, Tooltip, Typography } from '@mui/material';
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
          Hello, {user.first_name}!
        </Typography>
        <IconButton aria-label="settings" onClick={() => history.push(`/add-post`)}>
          <Tooltip title="Add Post">
            <AddAPhotoIcon />
          </Tooltip>
        </IconButton>
        <Typography
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >Start Your Journey.</Typography>
        <GetPost />
      </Stack>
      {/* <LogOutButton className="btn" /> */}
    </Box>

  ); // END OF return

} // END OF UserPage

// this allows us to use <App /> in index.js
export default UserPage;
