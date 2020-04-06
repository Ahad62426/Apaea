import { SET_TOKEN, TOKEN_DECRYPTION_SUCCESS, SIGN_OUT } from '../../constants'

export default (state = { user: null }, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, user: payload };    
    case TOKEN_DECRYPTION_SUCCESS:
      return { ...state, user: payload };    
    case SIGN_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
