import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Text } from 'native-base';

import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  TColors,
} from '../../components/Styles';
import { DrawerActions } from 'react-navigation-drawer';

import CstHeader from '../Headers';
import { LoadingButton } from '../../components/Utilities';
import I18n from '../../i18n';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  _takeMeTORegistration = memtype => {
    this.props.navigation.navigate('Registration', { memtype });
  };

  render() {
    return (
      <Container
        style={[
          DynamicP(0, 0, 0, 0),
          {
            justifyContent: 'space-between',
            backgroundColor: TColors.primaryColor,
          },
        ]}>
        <CstHeader
          isMenuRight={true}
          OpenMenu={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          customStyle={
            { backgroundColor: TColors.bgSecondary }
          }
          Screen={''}
        />
        <View
          style={[
            {
              backgroundColor: TColors.bgSecondary,
              flex: 1,
            },
            CommonStyles.vhc,
            DynamicP(20, 20, 20, 20),
          ]}>

          <View style={[{ flex: 4 }, CommonStyles.vchb]}>
            <Image style={[{ width: 300, height: 220, resizeMode: "contain" }]} source={require('../../assets/images/register.png')} ></Image >
          </View>

          <View style={[{ flex: 1 }, CommonStyles.vthc]}>
            <Text
              style={[
                CommonStyles.textCenter,
                DynamicFntW('700'),
                DynamicM(20, 10, 0, 0),
                CommonStyles.white,
                CommonStyles.uppercase,
              ]}>
              {I18n.t('signup_heading')}
            </Text>
          </View>
          <View style={[{ flex: 3, flexDirection: "column", }]}>

            <LoadingButton
              isBlock={true}
              submitting={false}
              rounded={true}
              loaderColor={'white'}
              textColor="white"
              btnText={I18n.t('indivisual_membership')}
              style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderWidth: 1, borderColor: "white" }]}
              callback={() => this._takeMeTORegistration("Individual")}
            />
            <View style={[{ width: "100%", height: "auto", flexDirection: "row" }, DynamicM(2, 2, 0, 0), CommonStyles.vhc]}>
              <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
              <Text style={[DynamicM(0, 0, 10, 10), CommonStyles.txtWhite]}>{I18n.t('or')}</Text>
              <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
            </View>
            <LoadingButton
              isBlock={true}
              submitting={false}
              rounded={true}
              loaderColor={'white'}
              textColor="black"
              btnText={I18n.t('institutional_membership')}
              style={[DynamicM(10, 5, 0, 0), { backgroundColor: "white", borderColor: "white" }]}
              callback={() => this._takeMeTORegistration("Institutional")}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default SignUp;
