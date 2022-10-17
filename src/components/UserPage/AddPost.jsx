// IMPORT REACT
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL UI 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Card, CardContent, Paper, Typography } from '@mui/material';


function AddPost () {

    // USE-STATE
    const [previewSource, setPreviewSource] = useState ('');
    const [description, setDescription] = useState('');
    // DISPATCH 
    const dispatch = useDispatch();
    // USE-HISTORY
    const history = useHistory();

    // HANDLE THE FILE CHANGE INPUT 
    const handleFileInputChange = e => {
        const file = e.target.files[0];
        previewFile(file);
    }

    // THIS IS USED TO PREVIEW THE IMAGE FILE SLECTED ON TO THE DOM.
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    // HANDLE THE SUBMIT BUTTON 
    const handelSubmitFile = e => {
        e.preventDefault();
        if(!previewSource) return;
        uploadPost(previewSource);
        // THIS HARD REFRESH PAGE. WILL NEED TO FIX THIS FOR
        // FUTURE USE. NEED TO ADD ALERT TO NOTIFY USER THAT THIER 
        // POST IS SUCCESSFUL. 
        window.location.reload();
    }
    
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/user')
    }


    // THIS IS OUR IMAGE FILE DATA, WE ARE CONVERTING THE IMAGE 
    // FILE INTO A STRING TO SEND IT AS OUT DATA TO SAGA. 
    const  uploadPost = (base64EncodedImage) => {
        dispatch({
            type: 'SAGA_ADD_POST',
            payload:{
                image_url:base64EncodedImage,
                description: description
            },
            headers:{'Content-type': 'application/json'}
        })
    } 

    return (
        <form>
            <Stack             
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
            <Typography variant='h3'>Post Your Photo!</Typography>
            <Card sx={{ maxWidth: 345 }}>
                <Paper variant="outlined" square>
                    <CardContent>
                    {previewSource && (<img src={previewSource} alt="chosen" />)}
                    <TextField 
                        type="file" 
                        onChange={handleFileInputChange} 
                        name="image"
                        fullWidth
                        required
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                    />
                    </CardContent>
                </Paper>
            </Card>
            <Button variant="contained" onClick={handelSubmitFile}>Add</Button>
            <Button variant="contained" onClick={handleCancel}>Back</Button>
            </Stack>
        </form>
    ) // END OF return
} // END OF AddPost

export default AddPost;
