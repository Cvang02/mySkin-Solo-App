import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL UI 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/system';
import { Card, Typography } from '@mui/material';

function AddProduct () {

    // USE-STATE
    const [previewSource, setPreviewSource] = useState ('');
    const [brandName, setBrandName] = useState('');
    const [description, setDescription] = useState('');

    // DISPATCH 
    const dispatch = useDispatch();
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
        if(!previewSource || !brandName) return;
        uploadPost(previewSource);
        // THIS HARD REFRESH PAGE. WILL NEED TO FIX THIS FOR
        // FUTURE USE. NEED TO ADD ALERT TO NOTIFY USER THAT THIER 
        // POST IS SUCCESSFUL. 
        window.location.reload();
    }

    // HANDLE THE CANCEL BUTTON
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/product')
    }


    // THIS IS OUR IMAGE FILE DATA, WE ARE CONVERTING THE IMAGE 
    // FILE INTO A STRING TO SEND IT AS OUT DATA TO SAGA. 
    const  uploadPost = (base64EncodedImage) => {
        dispatch({
            type: 'SAGA_ADD_PRODUCT',
            payload:{
                product_url:base64EncodedImage,
                brand_name: brandName,
                description: description
            },
            headers:{'Content-type': 'application/json'}
        })
    } 

    return (
        <Box
        component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >                    
            <Typography variant='h3' display='wrap'>Add Your Skincare Product!</Typography>
            <Card sx={{ maxWidth: 345 }}>
                <Container direction="center">
                {previewSource && (<img src={previewSource} alt="image" />)}
                <input type="file" onChange={handleFileInputChange} name="image" />
                <TextField 
                    id="outlined-basic" 
                    label="Brand Name" 
                    variant="outlined"
                    onChange={(e) => setBrandName(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </Container>
            </Card>
            <Button variant="contained" onClick={handelSubmitFile}>Add</Button>
            <Button variant="contained" onClick={handleCancel}>Back</Button>
            </Stack>
        </Box>
    )
}

export default AddProduct;