import React from 'react';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT 
import GetProductList from './GetProductList.jsx';

// IMPORT MATERIAL UI
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ProductPage () {

     // USE-HISTORY
     const history = useHistory();

    return (
        <div className="container">
        <h2>This is the product page.</h2>
        <IconButton aria-label="settings" onClick={() => history.push(`/add-product`)}>
          <AddAPhotoIcon />
        </IconButton>
        <GetProductList />
      </div>
    )
}

export default ProductPage;