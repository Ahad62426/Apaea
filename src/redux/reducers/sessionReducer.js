import { SET_USER_SESSION, SIGN_OUT } from '../../constants'

export default (state = { user: null }, { type, payload }) => {
  switch (type) {
    case SET_USER_SESSION:
      return { ...state, user: payload };   
    case SIGN_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
