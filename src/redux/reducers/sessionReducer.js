import { SET_TOKEN, SIGN_IN_SUCCESS, SIGN_OUT } from '../../constants'

export default (state = { token: null }, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };    
    case SIGN_IN_SUCCESS:
      return { ...state, token: payload };    
    case SIGN_OUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
