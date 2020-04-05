import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
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
import NameIcon from '../../assets/Icons/nameSVG';
import PasswordIcon from '../../assets/Icons/passwordSVG';
import CInput from '../../components/KeyBoard';
import {connect} from 'react-redux';
import {CLogo} from '../../components/Utilities';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      keyboardVisible: true,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  animateLogo = val => {
    this.setState({
      keyboardVisible: !val,
    });
  };
  submit = val => {
    // !validateEmail(this.state.email)
    //   ? CAlert({
    //       title: 'Validation Error',
    //       message: JSON.stringify(this.state),
    //       buttons: [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //     })
    //   : this.props.navigation.navigate('Verification');
  };

  _onChangeText = val => {
    //val = val.match(/.{1,3}/g).join('-');
    val.length < 10
      ? this.setState({
          PhoneNumber: val,
        })
      : null;
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
            DynamicP(20, 20, 20, 20),
          ]}>
          <View style={[{flex: 2}, CommonStyles.vhc]}>
          <CLogo height={100} width={100} />

          </View>
          <View style={[{flex: 8}]}>
          <Text
            style={[
              CommonStyles.textCenter,
              DynamicFntW('700'),
              DynamicM(10, 20, 0, 0),
              CommonStyles.white,
              CommonStyles.uppercase
            ]}>
            Create a Profile
          </Text>
          <Content>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <NameIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Firstname"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <NameIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Lastname"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Email"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <PasswordIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Password"
                  security={true}
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Gender"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="DOB"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Phone"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Mobile"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="House No"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Building Name"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Post Code"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
            <Item
              fixedLabel
              style={[DynamicM(5, 5, 0, 0), CommonStyles.stdInput]}>
              <Col size={2}>
                <EmailIcon size={20} color={'#A6BCD0'} />
              </Col>
              <Col size={8}>
                <CInput
                  style={CommonStyles.white}
                  placeholderTextColor={'#A6BCD0'}
                  placeholder="Address"
                  KeyboardCallback={val => this.animateLogo(val)}
                  onSubmitEditing={val => this.setState({first_name: val})}
                />
              </Col>
            </Item>
          </Content>

        
          </View>
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
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text
              style={[
                CommonStyles.textCenter,
                DynamicFntW('700'),
                CommonStyles.uppercase,
                CommonStyles.white,
              ]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
