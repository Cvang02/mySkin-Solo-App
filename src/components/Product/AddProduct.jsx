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

// IMPORT SWEETALERT2
import Swal from 'sweetalert2'

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
        Swal.fire({
            icon: 'success',
            title: 'Product Added Success!',
          })
        history.push('/product')
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
        <form>
            <Stack             
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
            <Typography variant='h4'>Add Your Skincare Product!</Typography>
                <Card sx={{ maxWidth: 345 }}>
                    <Paper variant="outlined" square>
                        <CardContent>
                        {previewSource && (<img src={previewSource} alt="image" />)}
                        <TextField 
                            type="file" 
                            onChange={handleFileInputChange} 
                            name="image"
                            fullWidth
                            required
                            margin="normal"
                        />
                        <TextField
                            id="brand-name" 
                            label="Brand Name" 
                            variant="outlined"
                            onChange={(e) => setBrandName(e.target.value)}
                            fullWidth
                            required
                            margin="normal"
                        />
                        <TextField
                            id="product-description"
                            label="Description"
                            multiline
                            rows={4}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        </CardContent>
                    </Paper>
                </Card>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <Button variant="contained" onClick={handelSubmitFile}>Add</Button>
                    <Button variant="contained" onClick={handleCancel}>Back</Button>
                </Stack>
            </Stack>
        </form>
    ) // END OF return
} // END OF AddProduct

export default AddProduct;
