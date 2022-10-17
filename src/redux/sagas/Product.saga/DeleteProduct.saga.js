import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* deleteProduct (action) {
    const itemId = action.payload
    // console.log(itemId);
    try {
        yield axios({
            method: 'DELETE',
            url: `/api/productRouter/${itemId}`
        })
        yield put({
            type: 'SAGA_GET_PRODUCT_LIST'
        })
    } catch {
        console.log ('ERROR IN DeleteProduct.saga.js')
    }
} //END OF deleteProduct

function* deleteProductSaga() {
    yield takeEvery('SAGA_DELETE_PRODUCT', deleteProduct)
}


export default deleteProductSaga;