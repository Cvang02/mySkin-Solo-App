import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* addPost (action) {
    // console.log('what is our action.paylod:', action.payload);
    try {

        yield axios({
            method: 'POST',
            url: '/api/postRouter',
            data: action.payload
        });
        
        yield put({
            type: 'SAGA_GET_POST_LIST',
            data: action.payload
        })
        
    } catch {
        console.log('error in addPost')
    }
}

function* addPostSaga(){
    yield takeEvery('SAGA_ADD_POST', addPost)
}

export default addPostSaga;

