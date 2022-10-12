import { useState } from 'react';
import DeletePost from './DeletePost.jsx';

// MATERIAL UI 
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';


function ImageItem({image}){

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

    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                    <EditIcon />
                    </IconButton>
                    }
                    title={image.id}
                />
                <CardMedia
                    component="img"
                    height="max"
                    src={image.image_url}
                    alt="Post_Feed"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {image.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <DeletePost image={image}/>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Skincare Product:</Typography>
                    <Typography paragraph>
                        This section will show the users skincare product that which they are using.
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
        </div>
    )
} // END OF ImageItem.

export default ImageItem;