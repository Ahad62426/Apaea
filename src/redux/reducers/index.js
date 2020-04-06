import { combineReducers } from 'redux';
import boardingDataReducer from './boardingDataReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import sessionReducer from './sessionReducer';
import myAccountReducer from './myAccountReducer';
import ourPeopleReducer from './ourPeopleReducer';

export default combineReducers({
    boardingDataReducer,
    signInReducer,
    signUpReducer,
    sessionReducer,
    myAccountReducer,
    ourPeopleReducer,
});
