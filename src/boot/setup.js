import React, {Component} from 'react';
import {Root, StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';
import {Provider} from 'react-redux';
import {AppContainer} from '../navigator';
import NavigationService from '../helperMethods/navigationService';
import store from '../redux/store';
import SplashScreen from 'react-native-splash-screen';

export default class Setup extends Component {
  componentDidMount() {
    SplashScreen.hide();
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
