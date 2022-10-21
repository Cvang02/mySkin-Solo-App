// IMPORT REACT
import { useState } from 'react';
import DeletePost from './DeletePost.jsx';
import { useHistory } from 'react-router-dom';

// IMPORT LUXON
import { DateTime } from 'luxon';

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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { Paper, Tooltip } from '@mui/material';


function ImageItem({image}){

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

    const formatTime = (datetimeString) => {
        const dt = DateTime.fromISO(datetimeString)
        return dt.toLocaleString(DateTime.DATETIME_FULL)
    }

    return (
        <div className='post-ls'>
            <Card sx={{ maxWidth: 300, minWidth:300 }}>
                <Paper variant="outlined" square>
                    <CardHeader></CardHeader>
                {/* <CardHeader title={image.id}/> */}
                <CardMedia
                    component="img"
                    height="max"
                    src={image.image_url}
                    alt="Post_Feed"
                />
                <CardContent>                    
                    <Typography 
                        variant="body2" 
                        color="text.primary"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {image.description}
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
                        <Typography 
                            variant="body2" 
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Date Posted: {formatTime(image.inserted_at)}
                        </Typography>
                        <CardActions disableSpacing>
                            <DeletePost image={image}/>
                            <IconButton aria-label="settings" onClick={() => history.push(`/post/${image.id}/editpost`)}>
                                <Tooltip title="Edit">
                                    <EditIcon />
                                </Tooltip>
                            </IconButton>
                        </CardActions>
                        {/* <Typography paragraph>Skincare Product:</Typography>
                        <Typography paragraph>
                            This section will show the users skincare product that which they are using.
                        </Typography> */} 
                        {/* this is for future goals */}
                    </CardContent>
                </Collapse>
                </Paper>
            </Card>
        </div>

    ) // END OF return

} // END OF ImageItem.

export default ImageItem;