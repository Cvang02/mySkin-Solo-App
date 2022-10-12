const postFeedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POST_ITEM':
            return action.payload;
        default:
            return state;
    }
}

export default postFeedReducer;