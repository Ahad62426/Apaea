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
  SIGN_UP_FAILURE
} from '../../constants';
import NavigationService from '../../helperMethods/navigationService';
import { RestClient } from '../../network/RestClient';
import I18n from '../../i18n';

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
              const { user } = resObj;
              if (failure_action === SIGN_UP_FAILURE) Alert.alert(I18n.t('Signed_Up_Successfully'));
              NavigationService.navigate('Welcome') 
              await setItem('@UserAuth', user);
              return customisedAction(SET_USER_SESSION, user);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              Alert.alert(resObj.message);
              return customisedAction(failure_action);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(I18n.t('NETWORK_ERROR_MSG'));
              return customisedAction(failure_action);
            }
            Alert.alert(I18n.t('ERROR_MSG'));
            return customisedAction(failure_action);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Session Unknown Error', error);
            Alert.alert(I18n.t('UNKNOWN_ERROR_MSG'));
            return customisedAction(failure_action);
          }
        }
      )
    );
}
