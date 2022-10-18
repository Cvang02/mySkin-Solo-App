import { useState } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button, TextField } from '@mui/material';

function AddProfileImage () {

    // LOCAL STATE
    const [previewSource, setPreviewSource] = useState ('');

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
    uploadImage(previewSource);
    }

    // DISPATCH 
    const dispatch = useDispatch();

    // THIS IS OUR IMAGE FILE DATA, WE ARE CONVERTING THE IMAGE 
    // FILE INTO A STRING TO SEND IT AS OUT DATA TO SAGA. 
    const  uploadImage = (base64EncodedImage) => {
        dispatch({
            type: 'REDUCER_USER_PROFILE',
            payload: {profile_url:base64EncodedImage},
            headers:{'Content-type': 'application/json'}
          });
    } 

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                src={previewSource}
                sx={{ width: 250, height: 250 }}
                />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
            <TextField 
                type="file" 
                onChange={handleFileInputChange} 
                name="image"
                required
            />
            <Button variant="contained" onClick={handleFileInputChange}>Add Picture</Button>
            </Stack>
        </>
    )
}

export default AddProfileImage;