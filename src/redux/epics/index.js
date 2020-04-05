import { combineEpics } from 'redux-observable';
import { signInEpic } from './signInEpic';

export const epics = combineEpics(
    signInEpic.signIn
);
