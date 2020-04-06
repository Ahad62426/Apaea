/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { setItem } from '../../helperMethods/localstorage';
import { customisedAction } from '../actions';
import {
  SIGN_IN_SUCCESS,
  SET_USER_SESSION,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG
} from '../../constants';
import NavigationService from '../../helperMethods/navigationService';
import { RestClient } from '../../network/RestClient';

export class sessionEpic {
  static session = action$ =>
    action$.pipe(
      ofType(SIGN_IN_SUCCESS),
      switchMap(
        async ({ payload: { token, failure_action } }) => {
          try {
            const response = await RestClient.get(API_ENDPOINTS.session, { token });
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              if (resObj && resObj.user) {
                const { user } = resObj;
                NavigationService.navigate('Welcome')
                await setItem('@UserAuth', user);
                return customisedAction(SET_USER_SESSION, user);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(failure_action);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              if (resObj && !resObj.success) {
                Alert.alert(resObj.message);
                return customisedAction(failure_action);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(failure_action);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(failure_action);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(failure_action);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('SignIn Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(failure_action);
          }
        }
      )
    );
}
