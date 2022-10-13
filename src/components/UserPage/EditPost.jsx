import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

function EditPostPage () {

    // USE - PARAMS
    const params = useParams();
    // USE - DISPATCH
    const dispatch = useDispatch();
    // USE - HISTORY 
    const history = useHistory();
    // USE - SELECTOR
    const postToEdit = useSelector(store => store.postToEdit)
    console.log('what is postToEdit:', postToEdit);

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
        history.push('/')
      }

    // HANDLE THE CANCEL BUTTON
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/')
      }


    return (
        <>
        <h2>Edit Post: {params.id}</h2>
        <form>
          <input 
                type="text"
                value={postToEdit.description || ''}
                onChange={(e) => dispatch({type: 'EDIT_DESCRIPTION', payload: e.target.value})}
          />
          <button onClick={handleConfirm}>Confirm Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      </>
    )
}

export default EditPostPage;
