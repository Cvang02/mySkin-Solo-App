import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import ProductItem from './GetProductItem.jsx';

function GetProductList () {

    // DISPATCH
    const dispatch = useDispatch();
    // USE - SELECTOR 
    const productList = useSelector(store => store.productListReducer);
    // console.log('what is our data:', productList)

    // USE-EFFECT (DISPLAY POST LIST ON DOM)
    useEffect(()=> {

        dispatch({
            type: 'SAGA_GET_PRODUCT_LIST'
        })

    },[]);

    return (
        <div>
          <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Brand Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default GetProductList;