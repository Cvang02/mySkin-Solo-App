// IMPORT REACT
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

// IMPORT MATERIAL UI
import { Stack } from '@mui/system';
import { Avatar, Button, TextField } from '@mui/material';

// IMPORT SWEETALERT2
import Swal from 'sweetalert2'

function EditProfilePage () {

  // USE - DISPATCH
  const dispatch = useDispatch();
  // USE - HISTORY 
  const history = useHistory();
  // USE - SELECTOR
  const user = useSelector((store) => store.user);

  // HANDLE THE CONFIRM CHANGE BUTTON
  const handleConfirm = (e) => {
      e.preventDefault();
      if (!user.username || !user.email|| !user.first_name|| !user.last_name) return;
      dispatch({
        type: 'SAGA_UPDATE_PROFILE',
        payload: user
      })
      Swal.fire({
        icon: 'success',
        title: 'Update Success!',
      })
      history.push('/profile')
  }

  // HANDLE THE CANCEL BUTTON
  const handleCancel = (e) => {
      e.preventDefault();
      history.push('/profile')
  }


  return (
    <>
      <form>
        <Stack             
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Avatar
            src={user.profile_url}
            sx={{ width: 250, height: 250 }}
          />
          <TextField 
            id="outlined-multiline-static"
            label="Image URL"
            type="text"
            value={user.profile_url || ''}
            onChange={(e) => dispatch({type: 'EDIT_PROFILE_URL', payload: e.target.value})}
            fullWidth
          />
          <TextField 
            id="outlined-multiline-static"
            label="Username"
            type="text"
            value={user.username || ''}
            onChange={(e) => dispatch({type: 'EDIT_PROFILE_USERNAME', payload: e.target.value})}
            fullWidth
            required
          />
          <TextField 
            id="outlined-multiline-static"
            label="Email"
            type="text"
            value={user.email || ''}
            onChange={(e) => dispatch({type: 'EDIT_PROFILE_EMAIL', payload: e.target.value})}
            fullWidth
            required
          />
          <TextField 
            id="outlined-multiline-static"
            label="First Name"
            type="text"
            value={user.first_name || ''}
            onChange={(e) => dispatch({type: 'EDIT_PROFILE_FIRST_NAME', payload: e.target.value})}
            fullWidth
            required
          />
          <TextField 
            id="outlined-multiline-static"
            label="Last Name"
            type="text"
            value={user.last_name || ''}
            onChange={(e) => dispatch({type: 'EDIT_PROFILE_LAST_NAME', payload: e.target.value})}
            fullWidth
            required
          />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
              <Button variant="contained" onClick={handleCancel}>Back</Button>
            </Stack>
        </Stack>
      </form>
    </>
  ) // END OF return

} // END OF EditProfilePage

export default EditProfilePage;

