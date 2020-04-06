import { combineEpics } from 'redux-observable';
import { signInEpic } from './signInEpic';
import { signUpEpic } from './signUpEpic';
import { ourPeopleEpic } from './ourPeopleEpic';

export const epics = combineEpics(
    signInEpic.signIn,
    signUpEpic.signUp,
    ourPeopleEpic.ourPeople,
);
