import React from 'react';

// IMPORT COMPONENT 
import AddProduct from './AddProduct.jsx';
import GetProductList from './GetProductList.jsx';

function ProductPage () {
    return (
        <div className="container">
        <h2>This is the product page.</h2>
        <AddProduct />
        <GetProductList />
      </div>
    )
}

export default ProductPage;