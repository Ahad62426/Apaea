/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  GET_OUR_PEOPLE,
  OUR_PEOPLE_SUCCESS,
  OUR_PEOPLE_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG
} from '../../constants';
import { RestClient } from '../../network/RestClient';

export class ourPeopleEpic {
  static ourPeople = action$ =>
    action$.pipe(
      ofType(GET_OUR_PEOPLE),
      switchMap(
        async ({ payload }) => {
          try {
            const response = await RestClient.get(`${API_ENDPOINTS.ourPeople}/${payload.toLowerCase().replace(' ', '-')}`);
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              if (resObj && resObj.length) {
                const parsedData = resObj.map(data => {
                  const tempData = data;
                  tempData.description = parseStringToArray(tempData.description);
                  return tempData
                });
                return customisedAction(OUR_PEOPLE_SUCCESS, parsedData);
              }
              Alert.alert("No Data Available");
              return customisedAction(OUR_PEOPLE_FAILURE, null);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              if (resObj && !resObj.success) {
                Alert.alert(resObj.message);
                return customisedAction(OUR_PEOPLE_FAILURE, null);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(OUR_PEOPLE_FAILURE, null);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(OUR_PEOPLE_FAILURE, null);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(OUR_PEOPLE_FAILURE, null);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Login Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(OUR_PEOPLE_FAILURE, null);
          }
        }
      )
    );
}

const parseStringToArray = string => {
  let newString = string.replace('\r\n', '').replace(/\n/ig, '');
  newString = newString.split('<br>');

  newString = newString.map(text => {
    if (text.includes('<p>') && text.includes('</p>')) {

    } else text = text.replace('<p>', '').replace('</p>', '');

    // if (text.includes())
    return text;
  })
  return newString;
}