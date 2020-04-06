import { combineEpics } from 'redux-observable';
import { boardingDataEpic } from './boardingDataEpic';
import { boardingImagesEpic } from './boardingImagesEpic';
import { signInEpic } from './signInEpic';
import { signUpEpic } from './signUpEpic';
import { sessionEpic } from './sessionEpic';
import { ourPeopleEpic } from './ourPeopleEpic';

export const epics = combineEpics(
    boardingDataEpic.boardingData,
    boardingImagesEpic.boardingImages,
    signInEpic.signIn,
    signUpEpic.signUp,
    sessionEpic.session,
    ourPeopleEpic.ourPeople,
);
