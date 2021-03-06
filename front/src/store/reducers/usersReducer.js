import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS
} from "../actions/usersActions";

const initialState = {
  registerError: null,
  user: null,
  loginError: null,
  userId: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {...state, registerError: null};
    case REGISTER_USER_FAILURE:
      return {...state, registerError: action.error};
    case LOGIN_USER_SUCCESS:
      return {...state, loginError: null, user: action.user};
    case LOGIN_USER_FAILURE:
      return {...state, loginError: action.error};
    case LOGOUT_USER_SUCCESS:
      return {...state, user: null};
    default:
      return state;
  }
};

export default usersReducer;