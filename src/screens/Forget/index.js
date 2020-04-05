import React, {Component} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Container, Text, Item, Input, Content, Button} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

import Icon from 'react-native-vector-icons/AntDesign';
import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  DynamicBgColor,
} from '../../components/Styles';
import EmailIcon from '../../assets/Icons/emailSVG';
import PasswordIcon from '../../assets/Icons/passwordSVG';
import UsaIcon from '../../assets/Icons/usaSVG';

import {connect} from 'react-redux';
import CInput from '../../components/KeyBoard';
import {CLogo, validateEmail, CAlert} from '../../components/Utilities';
import {doLogin} from '../../actions/AcctountActions';
import {saveUserToken} from '../../actions/AsyncStorage';
import {firebase} from '@react-native-firebase/auth';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      keyboardVisible: true,
      email: '',
      password: '',
      verificationCode:'123456'
    };
  }

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
          buttons: [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        })
      : this.submit();
  };

  submit = val => {
    this.props
      .doLogin(this.state.email, this.state.password)
      .then(res => {
        

        res.type === 'SUCCESS'
          ? this.props
              .saveUserToken(res.data)
              .then(res => {
                
                this.props.navigation.navigate('Verification');
              })
              .catch(error => {
                CAlert({
                  title: 'Validation Error',
                  message: 'Invalid Username Password',
                  buttons: [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                });
              })
          : this._failedLogin();
      })
      .catch(err => {
        CAlert({
          title: 'Opss',
          message: 'Something bad happened. Please contact admin',
          buttons: [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        });
      });
  };

  _failedLogin = () => {
    CAlert({
      title: 'Validation Error',
      message: 'Invalid Username Password',
      buttons: [{text: 'OK', onPress: () => console.log('OK Pressed')}],
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
    if (this.validatePhoneNumber()) {
      

      await firebase
        .auth()
        .signInWithPhoneNumber(this.state.PhoneNumber)
        .then(confirmResult => {
          
          this.setState({confirmResult},()=> {
            this.props.navigation.navigate('Verification');
          });
        })
        .catch(error => {
          alert(error.message);

          console.log(error);
        });
    } else {
      alert('Invalid Phone Number');
    }
  };

  handleVerifyCode = async () => {
    // Request for OTP verification
    const {confirmResult, verificationCode} = this.state;
    if (verificationCode.length == 6) {
      await confirmResult
        .confirm(verificationCode)
        .then(user => {
          this.setState({userId: user.uid});
          alert(`Verified! ${user.uid}`);
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
          DynamicBgColor(6),
          {
            justifyContent: 'space-between',
            backgroundColor: '#3E83FF',
          },
        ]}>
        <View
          style={[
            {
              backgroundColor: '#0F3871',
              flex: 7,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            },
            CommonStyles.vhc,
            DynamicP(20, 20, 20, 20),
          ]}>
          <View style={[{flex: 4}, CommonStyles.vchb]}>
            <CLogo height={100} width={100} />
          </View>

          <View style={[{flex: 10}, CommonStyles.vthc]}>
            <Text
              style={[
                CommonStyles.textCenter,
                DynamicFntW('700'),
                DynamicM(10, 60, 0, 0),
                CommonStyles.white,
                CommonStyles.uppercase,
              ]}>
              Sign In
            </Text>

            <View style={[{flexDirection: 'row', flexWrap: 'wrap'}]}>
              <Content>
                <Item
                  fixedLabel
                  style={[DynamicM(5, 15, 0, 0), CommonStyles.stdInput]}>
                  <Col size={2} style={CommonStyles.vhc}>
                    {/* <UsaIcon size={50} color={'#ff4b56'} /> */}
                    <Image style={{ width: 30, height: 30 }} source={require('../../assets/Icons/usflag.png')}/>
                  </Col>
                  <Col size={8}>
                    <CInput
                      placeholderTextColor={'#A6BCD0'}
                      placeholder="Phone number"
                      // keyboardType="numeric"
                      KeyboardCallback={val => this.animateLogo(val)}
                      onSubmitEditing={val => this.setState({PhoneNumber: val})}
                    />
                  </Col>
                </Item>
              </Content>
            </View>
          </View>
          <Button
            onPress={() => this.handleSendCode()}
            block
            rounded
            style={[DynamicM(30, 10, 0, 0), {backgroundColor: '#377CE1'}]}>
            <Icon name="arrowright" size={15} color="white" />
            <Text style={CommonStyles.uppercase}>Sign In</Text>
          </Button>
        </View>

        <View
          style={[
            CommonStyles.col,
            CommonStyles.vhc,
            {
              flex: 1,
            },
          ]}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text
              style={[
                CommonStyles.textCenter,
                DynamicFntW('700'),
                CommonStyles.uppercase,
                CommonStyles.white,
              ]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  saveUserToken: response => dispatch(saveUserToken(response)),
  doLogin: (email, Password) => dispatch(doLogin(email, Password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
