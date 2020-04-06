import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Container, Text, Item, Input, Content, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Icon from 'react-native-vector-icons/AntDesign';
import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  DynamicBgColor,
  TColors,
  DynamicFntSize,
  DynamicTColor,
  DynamicColor,
} from '../../components/Styles';
import { DrawerActions } from 'react-navigation-drawer';

import CstHeader from '../Headers';
import { connect } from 'react-redux';
import CInput from '../../components/KeyBoard';
import { CLogo, validateEmail, CAlert, LoadingButton } from '../../components/Utilities';
import { doVerify } from '../../actions/AcctountActions';
import { saveUserToken } from '../../actions/AsyncStorage';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      keyboardVisible: true,
      email: '',
      password: '',
      resend: false,
      codesent: false,
      verificationCode: '123456',
      loading: true,
    };
  }

  _takeMeTORegistration = memtype => {

    this.props.navigation.navigate('Registration', { memtype });
  };
  animateLogo = val => {
    this.setState({
      keyboardVisible: !val,
    });
  };
  credentialValidation = val => {
    !validateEmail(this.state.email)
      ? CAlert({
        title: 'Email validation Error',
        message: 'Your email address is invalid',
        buttons: [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      })
      : this.submit();
  };

  submit = val => {
    this.props
      .doVerify(this.state.PhoneNumber)
      .then(res => {

        res.type === 'SUCCESS'
          ? this.props.navigation.navigate('Agreement')
          : this._failedLogin();
      })
      .catch(err => {
        CAlert({
          title: 'Opss',
          message: 'Something bad happened. Please contact admin',
          buttons: [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        });
      });
  };

  _failedLogin = () => {
    CAlert({
      title: 'Validation Error',
      message: 'Invalid Username Password',
      buttons: [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    });
  };

  _onChangeText = val => {
    //val = val.match(/.{1,3}/g).join('-');
    val.length < 10
      ? this.setState({
        PhoneNumber: val,
      })
      : null;
  };

  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(this.state.PhoneNumber);
  };

  handleSendCode = async () => {
    // Request to send OTP
    this.setState({ resend: false })
    if (this.validatePhoneNumber()) {

      await firebase
        .auth()
        .SignUpWithPhoneNumber(this.state.PhoneNumber)
        .then(confirmResult => {
          this.setState({ confirmResult, codesent: true });
          setTimeout(() => {
            this.setState({ resend: true })
          }, 2000);
        })
        .catch(error => {
          CAlert({
            title: 'Email validation Error',
            message: error.message,
            buttons: [{ text: 'OK', onPress: () => { } }],
          })
          console.log(error);
        });
    } else {
      alert('Invalid Phone Number');
    }
  };

  handleVerifyCode = async (code) => {
    // Request for OTP verification
    const { confirmResult, verificationCode } = this.state;
    if (verificationCode.length == 6) {
      await confirmResult
        .confirm(code)
        .then(user => {
          this.setState({ userId: user.uid }, () =>
            CAlert({
              title: 'Verified!',
              message: "You have successfully verify your phone number",
              buttons: [{ text: 'OK', onPress: () => this.props.navigation.navigate('Agreement') }],
            }));
        })
        .catch(error => {
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Please enter a 6 digit OTP code.');
    }
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

          <View style={[{ flex: 3 }, CommonStyles.vthc]}>
            <Text
              style={[
                CommonStyles.textCenter,
                DynamicFntW('700'),
                DynamicM(20, 10, 0, 0),
                CommonStyles.white,
                CommonStyles.uppercase,
              ]}>
              Choose Membership Type
            </Text>
          </View>
          <View style={[{ flex: 3, flexDirection: "column", }]}>

            <LoadingButton
              isBlock={true}
              submitting={false}
              rounded={true}
              loaderColor={'white'}
              textColor="white"
              btnText={'Individual Membership'}
              style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderWidth: 1, borderColor: "white" }]}
              callback={() => this._takeMeTORegistration("Individual")}
            />
            <View style={[{ width: "100%", height: "auto", flexDirection: "row" }, DynamicM(2, 2, 0, 0), CommonStyles.vhc]}>
              <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
              <Text style={[DynamicM(0, 0, 10, 10), CommonStyles.txtWhite]}>or</Text>
              <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
            </View>
            <LoadingButton
              isBlock={true}
              submitting={false}
              rounded={true}
              loaderColor={'white'}
              textColor="black"
              btnText={'Institutional Membership'}
              style={[DynamicM(10, 5, 0, 0), { backgroundColor: "white", borderColor: "white", width: "100%" }]}
              callback={() => this._takeMeTORegistration("Institutional")}
            />
          </View>
        </View>


      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  saveUserToken: response => dispatch(saveUserToken(response)),
  doVerify: (mobile) => dispatch(doVerify(mobile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
