import { DISPLAY_DATA_SCREEN, HIDE_DATA_SCREEN } from '../../constants'

export default (state = { display: false, data: null }, { type, payload }) => {
  switch (type) {
    case DISPLAY_DATA_SCREEN:
      return { ...state, display: true, data: payload };   
    case HIDE_DATA_SCREEN:
      return { ...state, display: false, data: null };
    default:
      return state;
  }
};
