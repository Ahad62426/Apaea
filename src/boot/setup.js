import React, {Component} from 'react';
import { Root, StyleProvider, View, Title } from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';
import {Provider} from 'react-redux';
import {AppContainer} from '../navigator';
import NavigationService from '../helperMethods/navigationService';
import store from '../redux/store';
import SplashScreen from 'react-native-splash-screen';
import { GET_BOARDING_DATA, GET_BOARDING_IMAGES, SET_USER_SESSION } from '../constants';
import { getItem, setItem } from '../helperMethods/localstorage';
import MyAccountActions from '../screens/MyAccountActions'
import DataDisplay from '../screens/DataDisplay'
import { TColors } from '../components/Styles';

export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appExpired: false
    }
  }

  async componentDidMount() {
    console.disableYellowBox = true;
    SplashScreen.hide();
    store.dispatch({ type: GET_BOARDING_DATA });
    store.dispatch({ type: GET_BOARDING_IMAGES });


    const expiry = await getItem('@expiry');
    const date = new Date();
    if (expiry) {
      if (date.getDate() >= expiry+2 || date.getDate() < expiry) this.setState({ appExpired: true })
    }
    else await setItem('@expiry', date.getDate());


    const session = await getItem('@UserAuth');
    if (session) store.dispatch({ type: SET_USER_SESSION, payload: session });
  }
  
  render() {
    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(variables)}>
            {!this.state.appExpired ?
              <View style={{ flex: 1 }}>
                <MyAccountActions />
                <DataDisplay />
                <AppContainer ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
              </View>
              : <View style={{ flex: 1, justifyContent: "center", backgroundColor: TColors.bgColorPrimary }}>
                  <Title>This app has expired now!</Title>
                </View>
            }
          </StyleProvider>
        </Root>
      </Provider>
    );
  }
}
