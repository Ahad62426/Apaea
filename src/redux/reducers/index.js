import { combineReducers } from 'redux';
import boardingDataReducer from './boardingDataReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import sessionReducer from './sessionReducer';
import myAccountReducer from './myAccountReducer';
import dataScreenReducer from './dataScreenReducer';
import metaDataReducer from './metaDataReducer';

export default combineReducers({
    boardingDataReducer,
    signInReducer,
    signUpReducer,
    sessionReducer,
    myAccountReducer,
    dataScreenReducer,
    metaDataReducer,
});
