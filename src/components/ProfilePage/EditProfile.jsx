// IMPORT REACT
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

// IMPORT MATERIAL UI
import { Stack } from '@mui/system';
import { Button, TextField } from '@mui/material';

function EditProfilePage () {

  // USE - PARAMS
  const params = useParams();
  // USE - DISPATCH
  const dispatch = useDispatch();
  // USE - HISTORY 
  const history = useHistory();
  // USE - SELECTOR
  const user = useSelector((store) => store.user);

  // HANDLE THE CONFIRM CHANGE BUTTON
  const handleConfirm = (e) => {
      e.preventDefault();
      dispatch({
        type: 'SAGA_UPDATE_PROFILE',
        payload: user
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
          <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
          <Button variant="contained" onClick={handleCancel}>Back</Button>
        </Stack>
      </form>
    </>
  ) // END OF return

} // END OF EditProfilePage

export default EditProfilePage;

