import { GET_MY_ACCOUNT, MY_ACCOUNT_SUCCESS, MY_ACCOUNT__FAILURE } from '../../constants'

export default (state = {
  loading: false, workingpaper: [], workinhistory: [], proofpaper: [], proofreading: [], reviewhistory: [], reviewpaper: [], members: [], conference: null, conferencehistory1: []
}, { type, payload }) => {
  switch (type) {
    case GET_MY_ACCOUNT:
      return { ...state, loading: true };    
    case MY_ACCOUNT_SUCCESS:
      return { 
        ...state, loading: false,
        workingpaper,
        workinhistory,
        proofpaper,
        proofreading,
        reviewhistory,
        reviewpaper,
        members,
        conference,
        conferencehistory1
      };    
    case MY_ACCOUNT__FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
