const postToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_POST_TO_EDIT':
            return action.payload;
        case 'EDIT_DESCRIPTION':
            return {...state, description: action.payload}
        default:
            return state;
    }
}

export default postToEdit;