import {Post, ApiEndpoints} from '../../data';
import {saveUserToken} from './AsyncStorage'; 
import {error, success} from './CommonActions';
import {setUser} from './UserActions';

const addUser = UserObj => async dispatch => {
  try {
    let response = await Post(ApiEndpoints.signUp, UserObj);
    
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setUser(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

export {addUser};
