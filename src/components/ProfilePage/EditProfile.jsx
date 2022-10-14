import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

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
        <h2>Edit User: {params.id}</h2>
        <form>
            <input 
                type="text"
                value={user.username || ''}
                onChange={(e) => dispatch({type: 'EDIT_PROFILE_USERNAME', payload: e.target.value})}
            />
            <input 
                type="text"
                value={user.email || ''}
                onChange={(e) => dispatch({type: 'EDIT_PROFILE_EMAIL', payload: e.target.value})}
            />
                        <input 
                type="text"
                value={user.first_name || ''}
                onChange={(e) => dispatch({type: 'EDIT_PROFILE_FIRST_NAME', payload: e.target.value})}
            />
                        <input 
                type="text"
                value={user.last_name || ''}
                onChange={(e) => dispatch({type: 'EDIT_PROFILE_LAST_NAME', payload: e.target.value})}
            />
          <button onClick={handleConfirm}>Confirm Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      </>
    )
}

export default EditProfilePage;

