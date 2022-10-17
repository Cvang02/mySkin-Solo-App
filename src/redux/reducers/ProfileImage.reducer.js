const profileImageReducer = (state = [], action) => {
    switch (action.type) {
        case 'REDUCER_USER_PROFILE':
            return action.payload;
        default:
            return state;
    }
}

export default profileImageReducer;