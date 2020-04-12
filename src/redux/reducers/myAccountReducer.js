import { SET_USER_SESSION, MY_ACCOUNT_SUCCESS, MY_ACCOUNT__FAILURE, SET_ACCOUNT_MENU, DATA_SUBMISSION_SUCCESS } from '../../constants'

export default (state = { loading: false, data: {}, accountMenu: false, upToDate: true }, { type, payload }) => {
  switch (type) {
    case SET_USER_SESSION:
      return { ...state, loading: true };    
    case MY_ACCOUNT_SUCCESS:
      return { ...state, data: payload, loading: false, upToDate: true };
    case MY_ACCOUNT__FAILURE:
      return { ...state, loading: false, upToDate: false };
    case SET_ACCOUNT_MENU:
      return { ...state, accountMenu: payload };
    case DATA_SUBMISSION_SUCCESS:
      return { ...state, loading: false, upToDate: false };
    default:
      return state;
  }
};
