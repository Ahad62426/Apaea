/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  GET_BOARDING_DATA,
  BOARDING_DATA_SUCCESS,
  BOARDING_DATA_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
} from '../../constants';
import { RestClient } from '../../network/RestClient';
import I18n from '../../i18n';

export class boardingDataEpic {
  static boardingData = action$ =>
    action$.pipe(
      ofType(GET_BOARDING_DATA),
      switchMap(
        async () => {
          try {
            const response = await RestClient.get(API_ENDPOINTS.boardingData);
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              return customisedAction(BOARDING_DATA_SUCCESS, resObj);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              Alert.alert(resObj.message);
              return customisedAction(BOARDING_DATA_FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              return customisedAction(BOARDING_DATA_FAILURE);
            }
            Alert.alert(I18n.t('ERROR_MSG'));
            return customisedAction(BOARDING_DATA_FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('BoardingData Unknown Error', error);
            Alert.alert(I18n.t('UNKNOWN_ERROR_MSG'));
            return customisedAction(BOARDING_DATA_FAILURE);
          }
        }
      )
    );
}
