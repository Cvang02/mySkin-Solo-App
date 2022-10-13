import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

// IMPORT COMPONENT 
import GetProductList from './GetProductList.jsx';

function ProductPage () {
    return (
        <div className="container">
        <h2>This is the product page.</h2>
        <GetProductList />
        <LogOutButton className="btn" />
      </div>
    )
}

export default ProductPage;