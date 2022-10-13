import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* editProduct(action) {
    try {
      const productId = action.payload;
      // console.log('what is postID:', postId);
      const res = yield axios({
        method: 'GET',
        url: `/api/productRouter/${productId}`
      })
      yield put({
        type: 'SET_PRODUCT_TO_EDIT',
        payload: {
          id: res.data.id,
          brand_name: res.data.brand_name,
          description: res.data.description
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

function* editProductSaga(){
    yield takeEvery('SAGA_FETCH_PRODUCT_TO_EDIT', editProduct)
}

export default editProductSaga;