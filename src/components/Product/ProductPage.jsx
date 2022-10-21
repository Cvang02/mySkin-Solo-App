// IMPORT REACT
import React from 'react';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT 
import GetProductList from './GetProductList.jsx';
import './Product.css';

// IMPORT MATERIAL UI
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, Tooltip, Typography } from '@mui/material';
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
            <Typography
            variant='h5'
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Your Skincare Product
            </Typography>
            <Tooltip title="Add Product">
              <IconButton aria-label="settings" onClick={() => history.push(`/add-product`)}>
                <AddAPhotoIcon />
              </IconButton>
            </Tooltip>              
              <Typography
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Start Adding to your list. 
              </Typography>
            <GetProductList />
          </Stack>
      </Box>
    ) // END OF return

} // END OF ProductPage

export default ProductPage;