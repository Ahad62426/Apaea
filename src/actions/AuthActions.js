import {Post, ApiEndpoints} from '../../data';
import {saveUserToken} from './AsyncStorage'; 
import {error, success} from './CommonActions';

const signInAction = UserObj => async dispatch => {
  try {
    let response = await Post(ApiEndpoints.signIn, UserObj);
    if (response.error) {
      console.log('error', response);
      return dispatch(error(response || 'ERROR'));
    } else {
      console.log('success', response);
      return dispatch(saveUserToken(response.token));
    }
  } catch (error) {
    return dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

export { signInAction };
