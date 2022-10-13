import './Product.css';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function GetProductItem ({item}) {

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
        </tr>
    )
}

export default GetProductItem;