import './Product.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

// IMPORT COMPONENT
import DeleteProduct from './DeleteProduct.jsx';

// IMPORT MATERIAL UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function GetProductItem ({item}) {

  const history = useHistory();

  const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );

  return (
      <tr>
          <td>
          <Card sx={{ minWidth: 100 }}>
                  <CardMedia
                      component="img"
                      height="200"
                      src={item.product_url}
                      alt="Post_Feed"
                  />
          </Card>
          </td>
          <td>{item.brand_name}</td>
          <td>{item.description}</td>
          <td>
              <DeleteProduct item={item}/>
              <IconButton aria-label="settings" onClick={() => history.push(`/post/${item.id}/editproduct`)}>
                <EditIcon />
              </IconButton>
          </td>
      </tr>
    )
}

export default GetProductItem;