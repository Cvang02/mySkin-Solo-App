import axios from "axios";
import { takeEvery } from 'redux-saga/effects';


function* addProfileImage(action){
    // console.log('what is our action.paylod:', action.payload);
    try{
        yield axios({
            method: 'POST',
            url: '/api/userProfileRouter',
            data: action.payload
        })
    } catch {
        console.log('error in addItem')
    }
}

function* addProfileImageSaga(){
    yield takeEvery('SAGA_PROFILE_IMAGE', addProfileImage)
}


export default addProfileImageSaga;