const profileImageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE_IMAGE':
            return action.payload;
        default:
            return state;
    }
}

export default profileImageReducer;