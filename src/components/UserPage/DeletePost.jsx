// IMPORT REACT
import { useDispatch } from 'react-redux';

// IMPORT MATERIAL UI
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

function deletePost ({image}) {

    // DISPATCH
    const dispatch = useDispatch();

    // DELETE ROUTE BY IMAGE ID
    const deletePostImage = () => {
        // console.log('delete button clicked')
        dispatch({
            type: 'SAGA_DELETE_ITEM',
            payload: image.id
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