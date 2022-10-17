import axios from "axios";
import { takeEvery } from 'redux-saga/effects';

function* updateProfile (action) {
  try {
    const profileToUpdate = action.payload
    // console.log('what is profileToUpdate:', profileToUpdate);
    yield axios({
      method: 'PUT',
      url: `/api/user/${profileToUpdate.id}`,
      data: profileToUpdate
    })
  } catch (err) {
    console.log(err)
  }
} // END OF updateProfile

function* updateProfileSaga() {
    yield takeEvery('SAGA_UPDATE_PROFILE', updateProfile)
}

export default updateProfileSaga; 