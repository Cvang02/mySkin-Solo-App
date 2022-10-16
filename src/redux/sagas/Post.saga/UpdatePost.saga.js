import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* updatePost (action) {

  try {
      const postToUpdate = action.payload
      // console.log('what is postToUpdate:', postToUpdate.id);
      yield axios({
        method: 'PUT',
        url: `/api/postRouter/${postToUpdate.id}`,
        data: postToUpdate
      })
      yield put({
        type: 'SAGA_GET_POST_LIST'
      })
    } catch (err) {
      console.log(err)
    }
} // END OF updatePost

function* updatePostSaga(){
    yield takeEvery('SAGA_UPDATE_POST', updatePost)
}

export default updatePostSaga; 