import { combineEpics } from 'redux-observable';
import { signInEpic } from './signInEpic';
import { signUpEpic } from './signUpEpic';
import { tokenDecryptionEpic } from './tokenDecryptionEpic';
import { ourPeopleEpic } from './ourPeopleEpic';

export const epics = combineEpics(
    signInEpic.signIn,
    signUpEpic.signUp,
    tokenDecryptionEpic.tokenDecryption,
    ourPeopleEpic.ourPeople,
);
