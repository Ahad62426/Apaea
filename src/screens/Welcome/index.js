import React, { Component } from 'react';
import { View } from 'react-native';
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
import { getItem } from '../../helperMethods/localstorage';
import { CCarousel } from '../../components/Carousel';

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
      submitting: true,
      validatingSession: true,
    };
  }

  async componentDidMount() {
    const session = null // await getItem('@UserAuth');
    if (session) {
      this.props.navigation.navigate('Drawer');
      setTimeout(() => this.setState({ validatingSession: false }), 1000);
    } else this.setState({ validatingSession: false });
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
        {this.state.validatingSession ?
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
            
          </View> :
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
            <View style={[{ flex: 3 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
              <CCarousel
                list={this.props.welcomeData}
                callback={ProductID => this._getProduct(ProductID)}
                type={"image-slider"}

              />
            </View>
            <View style={[{ flex: 3, }, CommonStyles.vthc, DynamicM(5, 10, 0, 0)]}>
              <CCarousel
                list={this.props.welcomeData}
                callback={ProductID => this._getProduct(ProductID)}
                type={"text-slider"}
              />
            </View>
            <View style={[{ flex: 2, width: "80%" }, CommonStyles.vchb]}>
              <LoadingButton
                isBlock={true}
                submitting={this.state.submitting}
                rounded={true}
                loaderColor={'white'}
                textColor={"white"}
                btnText={'Login'}
                style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.primaryColor }]}
                callback={() => this._takeMeTOLogin()}
              />
              <LoadingButton
                isBlock={true}
                submitting={this.state.submitting}
                rounded={true}
                textColor={"white"}

                loaderColor={'white'}
                btnText={'Create Account'}
                style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderColor: "white", borderWidth: 1 }]}
                callback={() => this._takeMeTOSignUp()}
              />
            </View>
          </View>
        }

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  welcomeData: weclomedumyData,
});

export default connect(mapStateToProps, {})(SignIn);
