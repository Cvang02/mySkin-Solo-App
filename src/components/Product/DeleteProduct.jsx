// IMPORT REACT
import { useDispatch } from 'react-redux';

// IMPORT MATERIAL UI
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

function deleteProduct ({item}) {

    // DISPATCH
    const dispatch = useDispatch();

    // DELETE ROUTE BY IMAGE ID
    const deletePostImage = () => {
        // console.log('delete button clicked')
        dispatch({
            type: 'SAGA_DELETE_PRODUCT',
            payload: item.id
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

} // END OF deleteProduct

export default deleteProduct;