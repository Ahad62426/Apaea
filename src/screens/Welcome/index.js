import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import CommonStyles, {
  DynamicP,
  DynamicM,
  TColors
} from '../../components/Styles';
import CstHeader from '../Headers';
import { DrawerActions } from 'react-navigation-drawer';

import { connect } from 'react-redux';
import { CLogo, LoadingButton, } from '../../components/Utilities';
import { CCarousel } from '../../components/Carousel';
import { customisedAction } from '../../redux/actions';
import { BOARDING_DATA_SUCCESS } from '../../constants'

const weclomedumyData = [
  {
    title: 'Care on-Demand',
    desc: 'Start a visit from anywhere, 24/7, for diagnosis, treatment and peace of mind',
    svg: 'welcome1',
    size: 200
  },
  {
    title: 'Board Certified Physicians',
    svg: 'welcome1',
    desc: 'Our doctors deliver the full spectrum of primary care via secure, in-app messaging',
    size: 200
  },
  {
    title: 'Diagnosis and treatment',
    svg: 'welcome1',
    desc: 'Get a personalized Care Plan and necessary prescription or labs ordered all whithin the app',
    size: 200
  },
];

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      keyboardVisible: true,
      email: '',
      password: '',
      loading: true,
    };
  }

  _takeMeTOLogin = () => {

    this.props.navigation.navigate('SignIn');
  };

  _takeMeTOSignUp = () => {

    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <Container
        style={[
          DynamicP(0, 0, 0, 0),
          {
            justifyContent: 'space-between',
          },
        ]}>
        <CstHeader
          isMenuRight={true}
          OpenMenu={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          Screen={'Welcome to A-PAEA'}
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
            <View style={[{ flex: 2 }, CommonStyles.vchb]}>
              <CLogo height={100} width={100} />
            </View>
            {this.props.loading ?
              <View style={[{ flex: this.props.user ? 3 : 1 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                <ActivityIndicator style={{ marginTop: 20 }} size="large" color="white" />
              </View>
              : 
              <View style={[{ flex: 6 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                <View style={[{ flex: 3 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                  <CCarousel
                    list={weclomedumyData}
                    callback={ProductID => this._getProduct(ProductID)}
                    type={"image-slider"}
    
                  />
                </View>
                <View style={[{ flex: 3, }, CommonStyles.vthc, DynamicM(5, 10, 0, 0)]}>
                  <CCarousel
                    list={weclomedumyData}
                    callback={ProductID => this._getProduct(ProductID)}
                    type={"text-slider"}
                  />
                </View>
              </View>
            }
            {this.props.user ? null :
              <View style={[{ flex: 2, width: "80%" }, CommonStyles.vchb]}>
                <LoadingButton
                  isBlock={true}
                  submitting={false}
                  rounded={true}
                  loaderColor={'white'}
                  textColor={"white"}
                  btnText={'Login'}
                  style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.primaryColor }]}
                  callback={() => this._takeMeTOLogin()}
                />
                <LoadingButton
                  isBlock={true}
                  submitting={false}
                  rounded={true}
                  textColor={"white"}

                  loaderColor={'white'}
                  btnText={'Create Account'}
                  style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderColor: "white", borderWidth: 1 }]}
                  callback={() => this._takeMeTOSignUp()}
                />
              </View>
            }
          </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ boardingDataReducer, sessionReducer }) => ({
  loading: boardingDataReducer.loading,
  aboutUs: boardingDataReducer.aboutUs,
  user: sessionReducer.user,
});

export default connect(mapStateToProps, { customisedAction })(SignIn);
