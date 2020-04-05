import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import ourPeopleReducer from './ourPeopleReducer';

export default combineReducers({
    signInReducer,
    ourPeopleReducer,
});
