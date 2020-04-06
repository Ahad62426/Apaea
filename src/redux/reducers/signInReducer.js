import { SIGN_IN, SET_USER_SESSION, SIGN_IN_FAILURE } from '../../constants'

export default (state = { loading: false }, { type }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, loading: true };    
    case SET_USER_SESSION:
      return { ...state, loading: false };    
    case SIGN_IN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
