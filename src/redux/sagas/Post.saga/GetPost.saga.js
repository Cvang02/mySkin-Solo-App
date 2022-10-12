import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


function* getPostItems(){

    try {
        const dbPostItems = yield axios.get('/api/postRouter')
        // console.log('get all:', dbPostItems.data)

        yield put({ type: 'SET_POST_ITEM', payload: dbPostItems.data})

    } catch {
        console.log('get all error')
    }
}

function* getPostItemsSaga(){
    yield takeEvery('SAGA_GET_POST_LIST', getPostItems)
}


export default getPostItemsSaga;