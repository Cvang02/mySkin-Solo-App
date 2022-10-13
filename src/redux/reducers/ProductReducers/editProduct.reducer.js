const productToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_TO_EDIT':
            return action.payload;
        case 'EDIT_PRODUCT_BRAND_NAME':
            return {...state, brand_name: action.payload}
        case 'EDIT_PRODUCT_DESCRIPTION':
            return {...state, description: action.payload}
        default:
            return state;
    }
}

export default productToEdit;