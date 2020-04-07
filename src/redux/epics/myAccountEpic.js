/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  SET_USER_SESSION,
  MY_ACCOUNT_SUCCESS,
  MY_ACCOUNT__FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG
} from '../../constants';
import { RestClient } from '../../network/RestClient';

export class myAccountEpic {
  static myAccount = action$ =>
    action$.pipe(
      ofType(SET_USER_SESSION),
      switchMap(
        async ({ payload: { id, email, memtype } }) => {
          try {
            const response = await RestClient.get(API_ENDPOINTS.myaccount, { id, email, type: memtype });
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              return customisedAction(MY_ACCOUNT_SUCCESS, resObj);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              Alert.alert(resObj.message);
              return customisedAction(MY_ACCOUNT__FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(MY_ACCOUNT__FAILURE);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(MY_ACCOUNT__FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('MyAccount Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(MY_ACCOUNT__FAILURE);
          }
        }
      )
    );
}