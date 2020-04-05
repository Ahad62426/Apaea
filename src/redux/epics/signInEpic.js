/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { setItem } from '../../helperMethods/localstorage';
import { customisedAction } from '../actions';
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG
} from '../../constants';
import NavigationService from '../../helperMethods/navigationService';
import { RestClient } from '../../network/RestClient';

export class signInEpic {
  static signIn = action$ =>
    action$.pipe(
      ofType(SIGN_IN),
      switchMap(
        async ({ payload: { email, password } }) => {
          try {
            const response = await RestClient.post(API_ENDPOINTS.signIn, {
              email,
              password,
            });
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              if (resObj && resObj.success) {
                const { token } = resObj;
                // RestClient.setHeader('Authorization', token);
                NavigationService.navigate('Drawer')
                await setItem('@UserAuth', JSON.stringify(token));
                return customisedAction(SIGN_IN_SUCCESS, token);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(SIGN_IN_FAILURE, null);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              if (resObj && !resObj.success) {
                Alert.alert(resObj.message);
                return customisedAction(SIGN_IN_FAILURE, null);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(SIGN_IN_FAILURE, null);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(SIGN_IN_FAILURE, null);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(SIGN_IN_FAILURE, null);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Login Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(SIGN_IN_FAILURE, null);
          }
        }
      )
    );
}
