import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL UI 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            if(!previewSource) return;
            uploadPost(previewSource);
            // history.push('/home');
            setPreviewSource('');
            setBrandName('');
            setDescription('');
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
        <div>
            <div>
                <input type="file" onChange={handleFileInputChange} name="image" />
                <Box 
                    component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField 
                            id="outlined-basic" 
                            label="Brand Name" 
                            variant="outlined"
                            onChange={(e) => setBrandName(e.target.value)}
                         />
                    </div>
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </Box>
                <Button variant="contained" onClick={handelSubmitFile}>Add</Button>
            </div>
            {/* {previewSource && (
                <img src={previewSource} alt="chosen" />
            )} */}
        </div>
    )
}

export default AddProduct;