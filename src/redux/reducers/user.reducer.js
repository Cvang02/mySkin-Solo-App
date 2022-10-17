const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    case 'EDIT_PROFILE_URL':
      return {...state, profile_url: action.payload}
    case 'EDIT_PROFILE_USERNAME':
      return {...state, username: action.payload}
    case 'EDIT_PROFILE_EMAIL':
        return {...state, email: action.payload}
    case 'EDIT_PROFILE_FIRST_NAME':
        return {...state, first_name: action.payload}
    case 'EDIT_PROFILE_LAST_NAME':
      return {...state, last_name: action.payload}
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;