import { SUBMIT_DATA, DATA_SUBMISSION_SUCCESS, DATA_SUBMISSION_FAILURE } from '../../constants'

export default (state = {}, { type }) => {
  switch (type) {
    case SUBMIT_DATA:
      return { ...state, loading: true };    
    case DATA_SUBMISSION_SUCCESS:
      return { ...state, loading: false };
    case DATA_SUBMISSION_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
