import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* addProduct (action) {
    // console.log('what is our action.paylod:', action.payload);

    try {

        yield axios({
            method: 'POST',
            url: '/api/productRouter',
            data: action.payload
        });
        
        yield put({
            type: 'SAGA_GET_PRODUCT_LIST',
            data: action.payload
        })
        
    } catch {
        console.log ('GET ERROR IN AddProduct.js')
    }

} // END OF addProduct

function* addProductSaga(){
    yield takeEvery('SAGA_ADD_PRODUCT', addProduct)
}

export default addProductSaga;