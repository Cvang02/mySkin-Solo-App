// IMPORT REACT
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

// IMPORT MATERIAL UI
import { Button, Card, CardContent, CardHeader, CardMedia, Paper, TextField} from '@mui/material';
import { Stack } from '@mui/system';

// IMPORT SWEETALERT2
import Swal from 'sweetalert2'

function EditPostPage () {

    // USE - PARAMS
    const params = useParams();
    // USE - DISPATCH
    const dispatch = useDispatch();
    // USE - HISTORY 
    const history = useHistory();
    // USE - SELECTOR
    const postToEdit = useSelector(store => store.postToEdit)
    // console.log('what is postToEdit:', postToEdit);

    // USE - EFFECT 
    useEffect(() => {
        dispatch({
          type: 'SAGA_FETCH_POST_TO_EDIT',
          payload: params.id
        })
    }, [params.id])

    // HANDLE THE CONFIRM CHANGE BUTTON
    const handleConfirm = (e) => {
        e.preventDefault();
        dispatch({
          type: 'SAGA_UPDATE_POST',
          payload: postToEdit
        })
        Swal.fire({
          icon: 'success',
          title: 'Update Success!',
        })
        history.push('/')
      }

    // HANDLE THE CANCEL BUTTON
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/')
      }

    return (
        <>
          <form>
            <Stack             
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}>
            <Card sx={{ maxWidth: 345 }}>
              <Paper variant="outlined" square>
              <CardHeader title={params.id}/>
                <CardMedia
                  component="img"
                  height="max"
                  src={postToEdit.image_url}
                  alt="Post_Item"
                />
                <CardContent>
                  <TextField 
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    type="text"
                    value={postToEdit.description || ''}
                    onChange={(e) => dispatch({type: 'EDIT_DESCRIPTION', payload: e.target.value})}
                    fullWidth
                  />
                </CardContent>
              </Paper>
            </Card>
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

} // END OF EditPostPage

export default EditPostPage;
