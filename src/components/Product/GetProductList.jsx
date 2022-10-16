// IMPORT REACT
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

// IMPORT COMPONENTS
import './Product.css';
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
        <ul className='product-ul'>
            {productList.map(item => (
                <ProductItem key={item.id} item={item} />
            ))}
        </ul>
        
    ) // END OF return

} // END OF GetProductList

export default GetProductList;