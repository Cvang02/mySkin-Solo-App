import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

function EditProductPage () {

    // USE - PARAMS
    const params = useParams();
    // USE - DISPATCH
    const dispatch = useDispatch();
    // USE - HISTORY 
    const history = useHistory();
    // USE - SELECTOR
    const productToEdit = useSelector(store => store.productToEdit)
    console.log('what is productToEdit:', productToEdit);

    // USE - EFFECT 
    useEffect(() => {
        dispatch({
          type: 'SAGA_FETCH_PRODUCT_TO_EDIT',
          payload: params.id
        })
    }, [params.id])

    // HANDLE THE CONFIRM CHANGE BUTTON
    const handleConfirm = (e) => {
        e.preventDefault();
        dispatch({
          type: 'SAGA_UPDATE_PRODUCT',
          payload: productToEdit
        })
        history.push('/product')
      }

    // HANDLE THE CANCEL BUTTON
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/product')
      }


    return (
        <>
        <h2>Edit Post: {params.id}</h2>
        <form>
            <input 
                type="text"
                value={productToEdit.brand_name || ''}
                onChange={(e) => dispatch({type: 'EDIT_PRODUCT_BRAND_NAME', payload: e.target.value})}
            />
            <input 
                type="text"
                value={productToEdit.description || ''}
                onChange={(e) => dispatch({type: 'EDIT_PRODUCT_DESCRIPTION', payload: e.target.value})}
            />
          <button onClick={handleConfirm}>Confirm Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      </>
    )
}

export default EditProductPage;