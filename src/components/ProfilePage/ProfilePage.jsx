import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


// MATERIAL UI
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

function ProfilePage () {

    // USE - SELECTOR
    const user = useSelector((store) => store.user);
    // console.log(user);

    // USE - HISTORY 
    const history = useHistory();

    return (
        <Box>
            <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >
                <h1>Profile</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>Edit Profile: 
                    <IconButton aria-label="settings" onClick={() => history.push(`/profile/${user.id}/edit-profile`)}>
                        <EditIcon />
                    </IconButton>
                </p>
            </Stack>
        </Box>
    )
} // END OF ProfilePage

export default ProfilePage;