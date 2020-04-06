import { 
  GET_BOARDING_DATA,
  GET_BOARDING_IMAGES,
  BOARDING_DATA_SUCCESS,
  BOARDING_IMAGES_SUCCESS,
  BOARDING_DATA_FAILURE,
  BOARDING_IMAGES_FAILURE
} from '../../constants'

export default (state = { loading: false, loadingImages: false, aboutUs: null, sliderData: [], sliderImages: [] }, { type, payload }) => {
  switch (type) {
    case GET_BOARDING_DATA:
      return { ...state, loading: true };
    case GET_BOARDING_IMAGES:
      return { ...state, loadingImages: true };
    case BOARDING_DATA_SUCCESS: {
      const newSlider = [];
      newSlider.push(payload[1])
      newSlider.push(payload[2])
      newSlider.push(payload[3])
      return {
        ...state, loading: false,
        aboutUs: payload[0],
        sliderData: newSlider,
      };
    }
    case BOARDING_IMAGES_SUCCESS: {
      const newSliderImages = [];
      newSliderImages.push(payload[5])
      newSliderImages.push(payload[4])
      newSliderImages.push(payload[3])
      return {
        ...state, loadingImages: false,
        sliderImages: newSliderImages,
      };
    }
    case BOARDING_DATA_FAILURE:
      return { ...state, loading: false };
    case BOARDING_IMAGES_FAILURE:
      return { ...state, loadingImages: false };
    default:
      return state;
  }
};
