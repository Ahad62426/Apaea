import { GET_OUR_PEOPLE, OUR_PEOPLE_SUCCESS, OUR_PEOPLE_FAILURE } from '../../constants'

export default (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    
    case GET_OUR_PEOPLE:
      return { ...state, loading: true };    
    case OUR_PEOPLE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case OUR_PEOPLE_FAILURE:
      return { ...state, loading: false, data: [] };
    default:
      return state;
  }
};
