const productListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCT_ITEM':
            return action.payload;
        default:
            return state;
    }
} // END OF productListReducer

export default productListReducer;