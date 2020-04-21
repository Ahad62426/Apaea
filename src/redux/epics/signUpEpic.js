/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  SIGN_UP,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,Z
} from '../../constants';
import { RestClient } from '../../network/RestClient';
import I18n from '../../i18n';

export class signUpEpic {
  static signUp = action$ =>
    action$.pipe(
      ofType(SIGN_UP),
      switchMap(
        async ({ payload  }) => {
          try {
            const response = await RestClient.post(API_ENDPOINTS.signUp, payload);
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              const { token } = resObj;
              return customisedAction(SIGN_IN_SUCCESS, { token, failure_action: SIGN_UP_FAILURE });
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              if (resObj.name) Alert.alert(resObj.name[0]);
              else if (resObj.email) Alert.alert(resObj.email[0]);
              else if (resObj.password) Alert.alert(resObj.password[0]);
              else if (resObj.role) Alert.alert(resObj.role[0]);
              else if (resObj.memtype) Alert.alert(resObj.memtype[0]);
              else if (resObj.message) Alert.alert(resObj.message);
              else Alert.alert(status, I18n.t('UNKNOWN_ERROR_MSG'));
              return customisedAction(SIGN_UP_FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(I18n.t('NETWORK_ERROR_MSG'));
              return customisedAction(SIGN_UP_FAILURE);
            }
            Alert.alert(I18n.t('ERROR_MSG'));
            return customisedAction(SIGN_UP_FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('SignUp Unknown Error', error);
            Alert.alert(I18n.t('UNKNOWN_ERROR_MSG'));
            return customisedAction(SIGN_UP_FAILURE);
          }
        }
      )
    );
}
