//region References
import React, {Component} from 'react';
import {Root, StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';
import {Provider} from 'react-redux';
// import StartedScreen from '../screens/GetStarted'
import {AppContainer} from '../navigator';
import store from '../store';
import SplashScreen from 'react-native-splash-screen';
//endregion

export default class Setup extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(variables)}>
            {/* <StartedScreen /> */}
            <AppContainer />
          </StyleProvider>
        </Root>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  isGetStarted: state.token.isGetStarted,
});
