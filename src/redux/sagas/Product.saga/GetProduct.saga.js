import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* getProductList () {

    try {
        const dbProductList = yield axios.get('/api/productRouter')
        // console.log('get all:', dbProductList.data)

        yield put({ 
            type: 'SET_PRODUCT_ITEM', 
            payload: dbProductList.data})
            
    } catch {
        console.log ('GET ERROR IN GetProduct.js')
    }
} // END OF getProductList

function* getProductListSaga(){
    yield takeEvery('SAGA_GET_PRODUCT_LIST', getProductList)
} // END OF getProductListSaga


export default getProductListSaga;