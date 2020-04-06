import { SIGN_IN, TOKEN_DECRYPTION_SUCCESS, SIGN_IN_FAILURE } from '../../constants'

export default (state = { loading: false }, { type }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, loading: true };    
    case TOKEN_DECRYPTION_SUCCESS:
      return { ...state, loading: false };    
    case SIGN_IN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
