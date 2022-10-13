import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* editPost(action) {
    try {
      const postId = action.payload;
      // console.log('what is postID:', postId);
      const res = yield axios({
        method: 'GET',
        url: `/api/postRouter/${postId}`
      })
      yield put({
        type: 'SET_POST_TO_EDIT',
        payload: {
          id: res.data.id,
          description: res.data.description
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

function* EditPostSaga(){
    yield takeEvery('SAGA_FETCH_POST_TO_EDIT', editPost)
}

export default EditPostSaga;