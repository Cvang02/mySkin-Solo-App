import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* updateProduct(action) {

    try {
        const productToUpdate = action.payload
        console.log('what is productToUpdate:', productToUpdate.id);
        yield axios({
          method: 'PUT',
          url: `/api/productRouter/${productToUpdate.id}`,
          data: productToUpdate
        })
        yield put({
          type: 'SAGA_GET_PRODUCT_LIST'
        })
      } catch (err) {
        console.log(err)
      }

  }

function* updateProductSaga(){
    yield takeEvery('SAGA_UPDATE_PRODUCT', updateProduct)
}

export default updateProductSaga; 