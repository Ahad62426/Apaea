import { SIGN_UP, SET_USER_SESSION, SIGN_UP_FAILURE } from '../../constants'

export default (state = { loading: false }, { type }) => {
  switch (type) {
    case SIGN_UP:
      return { ...state, loading: true };    
    case SET_USER_SESSION:
      return { ...state, loading: false };    
    case SIGN_UP_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
