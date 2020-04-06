import { GET_BOARDING_DATA, BOARDING_DATA_SUCCESS, BOARDING_DATA_FAILURE } from '../../constants'

export default (state = { loading: false, showBoarding: false }, { type, payload }) => {
  switch (type) {
    case GET_BOARDING_DATA:
      return { ...state, loading: true };
    case BOARDING_DATA_SUCCESS:
      return { ...state, loading: false };
    case BOARDING_DATA_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
