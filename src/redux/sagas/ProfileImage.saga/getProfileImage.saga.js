import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';


function* getProfileImage(){

    try {
        const dbItems = yield axios.get('/api/userProfileRouter')
        console.log('get all:', dbItems.data)
        yield put({ type: 'SET_PROFILE_IMAGE', payload: dbItems.data})
    } catch {
        console.log('get all error')
    }
}

function* getProfileImageSaga(){
    yield takeEvery('SAGA_GET_PROFILE_IMAGE', getProfileImage)
}


export default getProfileImageSaga;