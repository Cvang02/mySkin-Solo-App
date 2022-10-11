import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AddPost () {

        // USE-STATE
        const [previewSource, setPreviewSource] = useState ('');
        const [description, setDescription] = useState('Controlled');
    
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
    
        // DISPATCH 
        const dispatch = useDispatch();
    
        // HANDLE THE SUBMIT BUTTON 
        const handelSubmitFile = e => {
            e.preventDefault();
            if(!previewSource) return;
            uploadPost(previewSource);
            setPreviewSource('');
            setDescription('');
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
        <div>
            <form onSubmit={handelSubmitFile}>
                <input type="file" onChange={handleFileInputChange} name="image" />
                <Box 
                    component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                >
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
                <Button variant="contained" type="submit">Add</Button>
            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen" />
            )}
        </div>
)
} // END OF AddPost

export default AddPost;