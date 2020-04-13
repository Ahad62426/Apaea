import { 
  GET_BOARDING_DATA,
  GET_BOARDING_IMAGES,
  BOARDING_DATA_SUCCESS,
  BOARDING_IMAGES_SUCCESS,
  BOARDING_DATA_FAILURE,
  BOARDING_IMAGES_FAILURE
} from '../../constants'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_BOARDING_DATA:
      return { ...state, loadingData: true };
    case GET_BOARDING_IMAGES:
      return { ...state, loadingImages: true };
    case BOARDING_DATA_SUCCESS: {
      const newSlider = [];
      newSlider.push(payload[1])
      newSlider.push(payload[2])
      newSlider.push(payload[3])
      return {
        ...state, loadingData: false,
        aboutUs: payload[0],
        editorial_services: payload[5],
        sliderData: newSlider,
      };
    }
    case BOARDING_IMAGES_SUCCESS: {
      const newSliderImages = [];
      newSliderImages.push(payload[1].subData[2])
      newSliderImages.push(payload[1].subData[1])
      newSliderImages.push(payload[1].subData[0])
      return {
        ...state, loadingImages: false,
        sliderImages: newSliderImages,
        galleryImages: payload
      };
    }
    case BOARDING_DATA_FAILURE:
      return { ...state, loadingData: false };
    case BOARDING_IMAGES_FAILURE:
      return { ...state, loadingImages: false };
    default:
      return state;
  }
};
