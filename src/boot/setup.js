import React, {Component} from 'react';
import {Root, StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';
import {Provider} from 'react-redux';
import {AppContainer} from '../navigator';
import NavigationService from '../helperMethods/navigationService';
import store from '../redux/store';
import SplashScreen from 'react-native-splash-screen';
import { GET_BOARDING_DATA, SET_USER_SESSION } from '../constants';
import { getItem } from '../helperMethods/localstorage';

export default class Setup extends Component {

  async componentDidMount() {
    SplashScreen.hide();
    store.dispatch({ type: GET_BOARDING_DATA });

    const session = await getItem('@UserAuth');
    if (session) store.dispatch({ type: SET_USER_SESSION, payload: session });
  }
  
  render() {
    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(variables)}>
            <AppContainer ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
          </StyleProvider>
        </Root>
      </Provider>
    );
  }
}
