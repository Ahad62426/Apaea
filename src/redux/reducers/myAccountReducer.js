import { GET_MY_ACCOUNT, MY_ACCOUNT_SUCCESS, MY_ACCOUNT__FAILURE } from '../../constants'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MY_ACCOUNT:
      return { ...state, loading: true };    
    case MY_ACCOUNT_SUCCESS:
      return { 
        ...state, ...payload, loading: false,
      };    
    case MY_ACCOUNT__FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
