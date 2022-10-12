import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
    } // END OF deleteImage

    return (
        <div>
            <IconButton 
                aria-label="share" 
                onClick={deletePostImage}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default deletePost;