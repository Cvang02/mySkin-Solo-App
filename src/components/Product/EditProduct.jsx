// IMPORT REACT
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

// IMPORT COMPONENTS
import './Product.css';

// IMPORT MATERIAL UI
import { Button, Card, CardContent, CardHeader, CardMedia, Paper, TextField} from '@mui/material';
import { Stack } from '@mui/system';

// IMPORT SWEETALERT2
import Swal from 'sweetalert2'

function EditProductPage () {

  // USE - PARAMS
  const params = useParams();
  // USE - DISPATCH
  const dispatch = useDispatch();
  // USE - HISTORY 
  const history = useHistory();
  // USE - SELECTOR
  const productToEdit = useSelector(store => store.productToEdit)
  // console.log('what is productToEdit:', productToEdit);

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
      if (!productToEdit.brand_name) return;
      dispatch({
        type: 'SAGA_UPDATE_PRODUCT',
        payload: productToEdit
      })
      Swal.fire({
        icon: 'success',
        title: 'Update Success!',
      })
      history.push('/product')
  }

  // HANDLE THE CANCEL BUTTON
  const handleCancel = (e) => {
      e.preventDefault();
      history.push('/product')
  }


  return (
    <form>
      <Stack             
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Card sx={{ maxWidth: 345 }}>
          <Paper variant="outlined" square>
            <CardHeader title={params.id}/>
            <CardMedia
              component="img"
              height="max"
              src={productToEdit.product_url}
              alt="Post_Item"
            />
            <CardContent>
              <TextField 
                id="brand-name"
                label="Brand Name"
                type="text"
                value={productToEdit.brand_name || ''}
                onChange={(e) => dispatch({type: 'EDIT_PRODUCT_BRAND_NAME', payload: e.target.value})}
                fullWidth
                required
                margin="normal"
              />
              <TextField 
                id="product-description"
                label="Description"
                multiline
                rows={4}
                type="text"
                value={productToEdit.description || ''}
                onChange={(e) => dispatch({type: 'EDIT_PRODUCT_DESCRIPTION', payload: e.target.value})}
                fullWidth
                margin="normal"
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
  ) // END OF return

} // END OF EditProductPage

export default EditProductPage;
