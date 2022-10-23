// IMPORT REACT
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

// MATERIAL UI
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
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
                <Typography sx={{fontFamily: 'monospace', fontWeight: 700}} variant='h4'>
                    Profile 
                    <IconButton aria-label="settings" onClick={() => history.push(`/profile/${user.id}/edit-profile`)}>
                        <Tooltip title="Edit">
                            <EditIcon />
                        </Tooltip>
                    </IconButton>
                </Typography>
                <Avatar
                    src={user.profile_url}
                    sx={{ width: 250, height: 250 }}
                />
                <Typography sx={{fontFamily: 'monospace', fontWeight: 700}} variant='h6'>Username: {user.username}</Typography>
                <Typography sx={{fontFamily: 'monospace', fontWeight: 700}} variant='h6'>Email: {user.email}</Typography>
                <Typography sx={{fontFamily: 'monospace', fontWeight: 700}} variant='h6'>First Name: {user.first_name}</Typography>
                <Typography sx={{fontFamily: 'monospace', fontWeight: 700}} variant='h6'>Last Name: {user.last_name}</Typography>
            </Stack>
        </Box>
    ) // END OF return

} // END OF ProfilePage

export default ProfilePage;