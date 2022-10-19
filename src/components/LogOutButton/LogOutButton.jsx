import { Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Typography 
      onClick={() => dispatch({ type: 'LOGOUT' })}
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
      variant="h5"
      >
        Logout
      </Typography>
    </>
  );
}

export default LogOutButton;
