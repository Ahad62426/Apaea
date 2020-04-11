import { combineEpics } from 'redux-observable';
import { boardingDataEpic } from './boardingDataEpic';
import { boardingImagesEpic } from './boardingImagesEpic';
import { signInEpic } from './signInEpic';
import { signUpEpic } from './signUpEpic';
import { sessionEpic } from './sessionEpic';
import { myAccountEpic } from './myAccountEpic';
import { metaDataEpic } from './metaDataEpic';
import { dataSubmissionEpic } from './dataSubmissionEpic';

export const epics = combineEpics(
    boardingDataEpic.boardingData,
    boardingImagesEpic.boardingImages,
    signInEpic.signIn,
    signUpEpic.signUp,
    sessionEpic.session,
    myAccountEpic.myAccount,
    metaDataEpic.getData,
    dataSubmissionEpic.dataSubmission,
);
