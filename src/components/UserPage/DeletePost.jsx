// IMPORT REACT
import { useDispatch } from 'react-redux';

// IMPORT MATERIAL UI
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

// IMPORT SWEETALERT2
import Swal from 'sweetalert2'

function deletePost ({image}) {

    // DISPATCH
    const dispatch = useDispatch();

    // DELETE ROUTE BY IMAGE ID
    const deletePostImage = () => {
        // console.log('delete button clicked')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            dispatch({
                type: 'SAGA_DELETE_ITEM',
                payload: image.id
            })
            Swal.fire(
                'Deleted!',
                'Your post has been deleted.',
                'success'
            )
            }
        })
    }

    return (
        <div>
            <IconButton 
                aria-label="share" 
                onClick={deletePostImage}
            >
                <Tooltip title="Delete">
                    <DeleteIcon />
                </Tooltip>
            </IconButton>
        </div>
    ) // END OF return

} // END OF deletePost

export default deletePost;