import { SET_DATA_KEY, GET_META_DATA, META_DATA_SUCCESS, META_DATA_FAILURE } from '../../constants'

export default (state = { dataKey: null, data: {
  president: null,
  secretary: null,
  treasurer: null,
  vice_presidents: null,
  advisory_board: null,
  resource_persons: null,
  conferences: null,
  forums: null,
  upconferences: null,
  workshop: null,
  partner: null,
  faq: null,
}}, { type, payload }) => {
  switch (type) {
    case SET_DATA_KEY:
      return { ...state, dataKey: payload };
    case GET_META_DATA:
      return { ...state, loading: true };
    case META_DATA_SUCCESS: {
      const { data } = state;
      data[payload.dataKey] = payload.resObj;
      return { ...state, data, loading: false };
    }
    case META_DATA_FAILURE: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};
