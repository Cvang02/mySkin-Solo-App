// IMPORT REACT
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// IMPORT COMPONENT
import DeleteProduct from './DeleteProduct.jsx';
import './Product.css';

// IMPORT MATERIAL UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { Paper, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

function GetProductItem ({item}) {

  // USE - HISTORY
  const history = useHistory();

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='product-ls'>
      <Card sx={{ maxWidth: 345 }}>
        <Paper
        variant="outlined" square
        >
          <CardHeader
            title={item.brand_name}
          /> 
          <CardMedia
              component="img"
              height="max"
              src={item.product_url}
              alt="Post_Feed"
          />
          <CardContent>
              <Typography variant="body2" color="text.primary">
                  {item.description}
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
              <Tooltip title="settings">
                <ExpandMoreIcon />
              </Tooltip>
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardActions disableSpacing>
                  <DeleteProduct item={item}/>
                  <IconButton aria-label="settings" onClick={() => history.push(`/post/${item.id}/editproduct`)}>
                    <Tooltip title="Edit">
                      <EditIcon />
                    </Tooltip>
                  </IconButton>
              </CardActions>
            </CardContent>
          </Collapse>
          </Paper>
      </Card>
    </div>
  ); // END OF return

} // END OF GetProductItem


export default GetProductItem;
