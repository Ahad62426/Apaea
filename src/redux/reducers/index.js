import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import ourPeopleReducer from './ourPeopleReducer';

export default combineReducers({
    signInReducer,
    signUpReducer,
    ourPeopleReducer,
});
