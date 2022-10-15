import React from 'react';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT 
import GetProductList from './GetProductList.jsx';

// IMPORT MATERIAL UI
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

function ProductPage () {

     // USE-HISTORY
     const history = useHistory();

    return (
        <Box>
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <h2>This is the product page.</h2>
            <IconButton aria-label="settings" onClick={() => history.push(`/add-product`)}>
              <AddAPhotoIcon />
            </IconButton>
            <GetProductList />
          </Stack>
      </Box>
    )
}

export default ProductPage;