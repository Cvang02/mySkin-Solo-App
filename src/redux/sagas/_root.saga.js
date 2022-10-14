import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';

// IMPORT PROFILE SAGA
import userSaga from './user.saga';
import addProfileImageSaga from './ProfileImage.saga/addProfileImage.saga.js';
import getProfileImageSaga from './ProfileImage.saga/getProfileImage.saga.js';
import updateProfileSaga from './Profile.saga/EditProfile.saga.js'

// IMPORT POST SAGA
import addPostSaga from './Post.saga/AddPost.saga.js';
import getPostItemsSaga from './Post.saga/GetPost.saga.js';
import deletePostItemSaga from './Post.saga/DeletePost.saga.js';
import EditPostSaga from './Post.saga/EditPost.saga.js';
import updatePostSaga from './Post.saga/UpdatePost.saga';

// IMPORT PRODUCT SAGA
import getProductListSaga from './Product.saga/GetProduct.saga.js';
import addProductSaga from './Product.saga/AddProduct.saga.js';
import deleteProductSaga from './Product.saga/DeleteProduct.saga.js';
import editProductSaga from './Product.saga/EditProduct.saga.js';
import updateProductSaga from './Product.saga/UpdateProduct.saga.js';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addProfileImageSaga(),
    getProfileImageSaga(),
    addPostSaga(),
    getPostItemsSaga(),
    deletePostItemSaga(),
    EditPostSaga(),
    updatePostSaga(),
    getProductListSaga(),
    addProductSaga(),
    deleteProductSaga(),
    editProductSaga(),
    updateProductSaga(),
    updateProfileSaga(),
  ]);
}
