import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Text, Item, Icon } from 'native-base';

import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  TColors,
} from '../../components/Styles';
import { DrawerActions } from 'react-navigation-drawer';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import CInput from '../../components/KeyBoard';
import { CAlert, LoadingButton } from '../../components/Utilities';
import { customisedAction } from '../../redux/actions';
import { SIGN_IN } from '../../constants'
import I18n from '../../i18n';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      keyboardVisible: true,
      resend: false,
      codesent: false,
      verificationCode: '',
      loading: true,
      email: '',
      isUserNameValid: false,
      isUserNameInValid: false,
      password: '',
      isPasswordValid: false,
      isPasswordInValid: false,


    };
  }

  animateLogo = val => {
    this.setState({
      keyboardVisible: !val,
    });
  };


  submit = () => {
    const { email, password } = this.state;
    this.props.customisedAction(SIGN_IN, {
      email, password
    });
  }

  validateUserName = email => {
    this.setState({ email }, () => {

      var resultlength = this.state.email
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

            <View style={[{ flex: 9 }, CommonStyles.vhc]}>
              <View style={[{  }]}>
                <Text
                  style={[
                    CommonStyles.textCenter,
                    DynamicFntW('700'),
                    DynamicM(20, 10, 0, 0),
                    CommonStyles.white,
                    CommonStyles.uppercase,
                  ]}>
                  {I18n.t('login_heading')}
                </Text>
              </View>
                <Item
                  fixedLabel
                  success={this.state.isUserNameValid}
                  error={this.state.isUserNameInValid}
                  style={[DynamicM(5, 15, 0, 0), CommonStyles.stdInput ]}>

                  <CInput
                    placeholderTextColor={'#A6BCD0'}
                    placeholder={I18n.t('username')}
                    placeholderTextColor="white"
                    value={this.state.email}
                    style={{ color: "white", backgroundColor: TColors.bgSecondary, borderBottomColor: "white", borderBottomWidth: .2 }}
                    KeyboardCallback={val => this.animateLogo(val)}
                    onChangeText={uname => this.validateUserName(uname)}
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
                    placeholder={I18n.t('password')}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    value={this.state.password}
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
                submitting={this.props.signInReducer.loading}
                rounded={true}
                loaderColor={TColors.bgSecondary}
                textColor="black"
                btnText={I18n.t('login')}
                style={[DynamicM(10, 5, 0, 0), { backgroundColor: "white", borderColor: "white" }]}
                callback={() => this.submit()}
              />
              <View style={[{ width: "100%", height: "auto", flexDirection: "row" }, DynamicM(2, 2, 0, 0), CommonStyles.vhc]}>
                <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
                <Text style={[DynamicM(0, 0, 10, 10), CommonStyles.txtWhite]}>{I18n.t('or')}</Text>
                <View style={{ width: "43%", borderBottomColor: "white", borderBottomWidth: 1, height: 2 }}></View>
              </View>
              <LoadingButton
                isBlock={true}
                submitting={this.props.signInReducer.loading}
                rounded={true}
                loaderColor={'white'}
                textColor="white"
                btnText={I18n.t('register')}
                style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderWidth: 1, borderColor: "white" }]}
                callback={() => this.props.navigation.navigate('SignUp')}
              />
            </View>
          </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ signInReducer }) => ({ signInReducer });

export default connect( mapStateToProps, { customisedAction })(SignIn);
