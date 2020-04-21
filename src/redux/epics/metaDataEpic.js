/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  GET_META_DATA,
  META_DATA_SUCCESS,
  META_DATA_FAILURE,
  NETWORK_ERROR_MSG,
} from '../../constants';
import { RestClient } from '../../network/RestClient';
import I18n from '../../i18n';

export class metaDataEpic {
  static getData = action$ =>
    action$.pipe(
      ofType(GET_META_DATA),
      switchMap(
        async ({ payload: { dataKey, sub_url, extraKey } }) => {
          try {
            let URL = sub_url ? `${sub_url}/${dataKey}` : dataKey;
            const response = await RestClient.get(URL.replace(/_/g, '-'));
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              let data = resObj;
              if (extraKey) data = resObj[extraKey];
              return customisedAction(META_DATA_SUCCESS, { data, dataKey });
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              Alert.alert(resObj.message);
              return customisedAction(META_DATA_FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(I18n.t('NETWORK_ERROR_MSG'));
              return customisedAction(META_DATA_FAILURE);
            }
            Alert.alert(I18n.t('ERROR_MSG'));
            return customisedAction(META_DATA_FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('MetaData Unknown Error', error);
            Alert.alert(I18n.t('UNKNOWN_ERROR_MSG'));
            return customisedAction(META_DATA_FAILURE);
          }
        }
      )
    );
}