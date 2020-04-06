/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { setItem } from '../../helperMethods/localstorage';
import { customisedAction } from '../actions';
import {
  SIGN_UP,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG
} from '../../constants';
import NavigationService from '../../helperMethods/navigationService';
import { RestClient } from '../../network/RestClient';

export class signUpEpic {
  static signUp = action$ =>
    action$.pipe(
      ofType(SIGN_UP),
      switchMap(
        async ({ payload  }) => {
          try {
            const response = await RestClient.post(API_ENDPOINTS.signUp, payload);
            const { status, data: resObj, problem } = response;
            console.log(response);
            if (status && status === 200) {
              if (resObj && resObj.success) {
                const { token } = resObj;
                NavigationService.navigate('Drawer')
                await setItem('@UserAuth', JSON.stringify(token));
                return customisedAction(SIGN_IN_SUCCESS, token);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(SIGN_UP_FAILURE, null);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              if (resObj && !resObj.success) {
                if (resObj.name) Alert.alert(resObj.name[0]);
                else if (resObj.email) Alert.alert(resObj.email[0]);
                else if (resObj.password) Alert.alert(resObj.password[0]);
                else if (resObj.role) Alert.alert(resObj.role[0]);
                else if (resObj.memtype) Alert.alert(resObj.memtype[0]);
                else if (resObj.message) Alert.alert(resObj.message);
                else Alert.alert(status, UNKNOWN_ERROR_MSG);
                return customisedAction(SIGN_UP_FAILURE, null);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(SIGN_UP_FAILURE, null);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(SIGN_UP_FAILURE, null);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(SIGN_UP_FAILURE, null);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('SignUp Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(SIGN_UP_FAILURE, null);
          }
        }
      )
    );
}
