/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  SUBMIT_DATA,
  DATA_SUBMISSION_SUCCESS,
  DATA_SUBMISSION_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG,
} from '../../constants';
import { RestClient } from '../../network/RestClient';

export class dataSubmissionEpic {
  static dataSubmission = action$ =>
    action$.pipe(
      ofType(SUBMIT_DATA),
      switchMap(
        async ({ payload }) => {
          try {
            const response = await RestClient.post(payload.dataKey, payload);
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              Alert.alert(resObj.msg)
              return customisedAction(DATA_SUBMISSION_SUCCESS);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              Alert.alert(resObj.message);
              return customisedAction(DATA_SUBMISSION_FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              return customisedAction(DATA_SUBMISSION_FAILURE);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(DATA_SUBMISSION_FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('DataSubmission Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(DATA_SUBMISSION_FAILURE);
          }
        }
      )
    );
}
