import { GET_MY_ACCOUNT, MY_ACCOUNT_SUCCESS, MY_ACCOUNT__FAILURE, SET_ACCOUNT_MENU } from '../../constants'

export default (state = { loading: false, data: {}, accountMenu: false }, { type, payload }) => {
  switch (type) {
    case GET_MY_ACCOUNT:
      return { ...state, loading: true };    
    case MY_ACCOUNT_SUCCESS:
      return { 
        ...state, data: payload, loading: false,
      };
    case MY_ACCOUNT__FAILURE:
      return { ...state, loading: false };
    case SET_ACCOUNT_MENU:
      return { ...state, accountMenu: payload };
    default:
      return state;
  }
};
