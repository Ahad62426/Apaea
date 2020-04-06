import { SIGN_UP, SIGN_IN_SUCCESS, SIGN_UP_FAILURE } from '../../constants'

export default (state = { loading: false }, { type }) => {
  switch (type) {
    case SIGN_UP:
      return { ...state, loading: true };    
    case SIGN_IN_SUCCESS:
      return { ...state, loading: false };    
    case SIGN_UP_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
