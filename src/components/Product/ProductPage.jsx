// IMPORT REACT
import React from 'react';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT 
import GetProductList from './GetProductList.jsx';
import './Product.css';

// IMPORT MATERIAL UI
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';

function ProductPage () {

    // USE-HISTORY
    const history = useHistory();

    return (
        <Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <h2>Your Skincare Product</h2>
            <Tooltip title="Add Product">
              <IconButton aria-label="settings" onClick={() => history.push(`/add-product`)}>
                <AddAPhotoIcon />
              </IconButton>
            </Tooltip>
            <GetProductList />
          </Stack>
      </Box>
    ) // END OF return

} // END OF ProductPage

export default ProductPage;