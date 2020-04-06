import { SIGN_UP, TOKEN_DECRYPTION_SUCCESS, SIGN_UP_FAILURE } from '../../constants'

export default (state = { loading: false }, { type }) => {
  switch (type) {
    case SIGN_UP:
      return { ...state, loading: true };    
    case TOKEN_DECRYPTION_SUCCESS:
      return { ...state, loading: false };    
    case SIGN_UP_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
