import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* deletePostItem (action) {
    const itemId = action.payload
    // console.log(itemId);
    try {
        yield axios({
            method: 'DELETE',
            url: `/api/postRouter/${itemId}`
        })
        yield put({
            type: 'SAGA_GET_POST_LIST'
        })
    } catch {
        console.log('ERROR IN DeletePost.saga.js');
    }
} // END OF deletePostItem

function* deletePostItemSaga() {
    yield takeEvery('SAGA_DELETE_ITEM', deletePostItem)
}


export default deletePostItemSaga;