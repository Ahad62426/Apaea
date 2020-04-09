import { combineEpics } from 'redux-observable';
import { boardingDataEpic } from './boardingDataEpic';
import { boardingImagesEpic } from './boardingImagesEpic';
import { signInEpic } from './signInEpic';
import { signUpEpic } from './signUpEpic';
import { sessionEpic } from './sessionEpic';
import { myAccountEpic } from './myAccountEpic';
import { ourPeopleEpic } from './ourPeopleEpic';
import { metaDataEpic } from './metaDataEpic';

export const epics = combineEpics(
    boardingDataEpic.boardingData,
    boardingImagesEpic.boardingImages,
    signInEpic.signIn,
    signUpEpic.signUp,
    sessionEpic.session,
    myAccountEpic.myAccount,
    ourPeopleEpic.ourPeople,
    metaDataEpic.getData,
);
