import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Container, Text, Item, Input, Content, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      keyboardVisible: true,
      resend: false,
      codesent: false,
      verificationCode: '123456',
      loading: true,
      submitting: true,
      userName: '',
      isUserNameValid: false,
      isUserNameInValid: false,
      password: '',
      isPasswordValid: false,
      isPasswordInValid: false,


    };
  }

  _takeMeTOAccount = () => {

    this.props.navigation.navigate('MyAccount');
  };

  _takeMeTOSignUp = () => {

    this.props.navigation.navigate('SignUp');
  };
  animateLogo = val => {
    this.setState({
      keyboardVisible: !val,
    });
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

  validateUserName = uname => {
    this.setState({ userName: uname }, () => {

      var resultlength = this.state.userName
      resultlength.length == 0
        ?
        this.setState({
          isUserNameInValid: true
          , isUserNameValid: false
        }) : this.setState({
          isUserNameInValid: false
          , isUserNameValid: true
        })

    });

  }
  validatePassword = () => {
    var result = this.state.password


    result.length == 0
      ?
      this.setState({ isPasswordValid: false, isPasswordInValid: true })
      :
      this.setState({ isPasswordValid: true, isPasswordInValid: false })

  }
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
        <Content>

          <View
            style={[
              {
                backgroundColor: TColors.bgSecondary,
                flex: 1,
              },
              CommonStyles.vhc,
              DynamicP(20, 20, 20, 20),
            ]}>

            <View style={[{ flex: 3 }, CommonStyles.vchb]}>
              <Image style={[{ width: 300, height: 180, resizeMode: "contain" }]} source={require('../../assets/SliderImages/character.png')} ></Image >
            </View>

            <View style={[{ flex: 9 }, CommonStyles.vthc]}>
              <Text
                style={[
                  CommonStyles.textCenter,
                  DynamicM(20, 10, 0, 0),
                  CommonStyles.white,
                ]}>
                Login into app
            </Text>
              <Text
                style={[
                  CommonStyles.textCenter,
                  CommonStyles.white
                  , DynamicFntSize(12),
                  CommonStyles.textColor
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ante lacus, eu pretium purus vulputate sit amet.
            </Text>

              <Item
                fixedLabel
                success={this.state.isUserNameValid}
                error={this.state.isUserNameInValid}
                style={[DynamicM(5, 15, 0, 0), CommonStyles.stdInput,]}>

                <CInput
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="username"
                  placeholderTextColor="white"
                  style={{ color: "white", backgroundColor: TColors.bgSecondary, borderBottomColor: "white", borderBottomWidth: .2 }}
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val =>
                    this.setState({ userName: val })
                  }

                  onChangeText={uname => {

                    this.validateUserName(uname);

                  }}

                />

                {this.state.isUserNameValid ? <Icon name="checkmark-circle" /> : null}
                {this.state.isUserNameInValid ? <Icon name="close-circle" /> : null}
              </Item>
              <Item
                fixedLabel
                success={this.state.isPasswordValid}
                error={this.state.isPasswordInValid}
                style={[DynamicM(5, 15, 0, 0), CommonStyles.stdInput]}>
                <CInput
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="password"
                  placeholderTextColor="white"
                  style={{ backgroundColor: TColors.bgSecondary, color: "white", borderBottomColor: "white", borderBottomWidth: .2 }}
                  KeyboardCallback={val => this.animateLogo(val)}
                  onChangeText={pass => {
                    this.setState({ password: pass }, () => this.validatePassword());


                  }}
                />
                {this.state.isPasswordValid ? <Icon name="checkmark-circle" /> : null}
                {this.state.isPasswordInValid ? <Icon name="close-circle" /> : null}
              </Item>




            </View>
            <View style={[{ flex: 5, flexDirection: "column", }]}>
              <LoadingButton
                isBlock={true}
                submitting={this.state.submitting}
                rounded={true}
                loaderColor={'white'}
                textColor="black"
                btnText={'Login'}
                style={[DynamicM(10, 5, 0, 0), { backgroundColor: "white", borderColor: "white", width: "100%" }]}
                callback={() => this._takeMeTOAccount()}
              />
              <View style={[{ width: "100%", height: "auto", flexDirection: "row" }, DynamicM(2, 2, 0, 0), CommonStyles.vhc]}>
                <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
                <Text style={[DynamicM(0, 0, 10, 10), CommonStyles.txtWhite]}>or</Text>
                <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
              </View>
              <LoadingButton
                isBlock={true}
                submitting={this.state.submitting}
                rounded={true}
                loaderColor={'white'}
                textColor="white"
                btnText={'Registers'}
                style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderWidth: 1, borderColor: "white" }]}
                callback={() => this._takeMeTOSignUp()}
              />
            </View>
          </View>
        </Content>


      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  saveUserToken: response => dispatch(saveUserToken(response)),
  doVerify: (mobile) => dispatch(doVerify(mobile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
