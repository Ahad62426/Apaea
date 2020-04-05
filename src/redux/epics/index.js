import { combineEpics } from 'redux-observable';
import { signInEpic } from './signInEpic';
import { ourPeopleEpic } from './ourPeopleEpic';

export const epics = combineEpics(
    signInEpic.signIn,
    ourPeopleEpic.ourPeople,
);
