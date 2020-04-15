import { DISPLAY_IMAGES_SCREEN, HIDE_IMAGES_SCREEN } from '../../constants'

export default (state = { display: false, data: null }, { type, payload }) => {
  switch (type) {
    case DISPLAY_IMAGES_SCREEN:
      return { ...state, display: true, data: payload };   
    case HIDE_IMAGES_SCREEN:
      return { ...state, display: false };
    default:
      return state;
  }
};
