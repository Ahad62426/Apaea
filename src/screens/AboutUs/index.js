//references Region
import React, {Component} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {
  Container,
  Drawer,
  Button,
  Icon,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Label,
  Text,
} from 'native-base';
import SideBar from '../Sidebar';
import {TColors} from '../../components/Styles';
import CstHeader from '../Headers';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import ChatIcon from '../../assets/Icons/chatSVG';
import {LoadingButton} from '../../components/Utilities';
import IonIcons from 'react-native-vector-icons/Entypo';

import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  DynamicBgColor,
  DynamicHeight,
  DynamicBDRadius,
  DynamicBorderPosition,
} from '../../components/Styles';

const TabsSize = CommonStyles.fullWidth > 480 ? 100 : 50;

//endregion

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: true,
    };
  }

  _takeMeTOChat = () => {
    this.props.navigation.navigate('ChatSc');
  };

  _showAlert(title, msg, btn) {
    Alert.alert(title, msg, [
      {text: btn == null ? 'Okay' : btn, onPress: () => {}},
    ]);
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#E2E9F5',
        }}>
        <CstHeader
          isMenuRight={true}
          OpenMenu={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          Screen={'About Us'}
        />
        <View style={{height: 0}}>
          <View
            style={{
              height: 200,
              backgroundColor: TColors.bgColorPrimary,
            }}></View>
        </View>
        <Content
          style={[
            DynamicM(0, 0, 10, 10),
            CommonStyles.BoxShadow,
            {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: 'white',
            },
          ]}>
          <Label
            style={[DynamicP(10, 10, 0, 0), {fontSize: 14, fontWeight: '700'}]}>
            About Asia-Pacific Applied Economics Association
          </Label>
          <Text style={{fontSize:13,lineHeight:20}}>
            The Asia-Pacific Applied Economics Association (APAEA) is a not for
            profit association founded in 2016. The APAEA's key aim is to
            provide a forum and resource base for developing research capacity
            of researchers in the Asia-Pacific region, with a particular focus
            on applied econometrics and Islamic finance and economics research.
            APAEA intends to promote women in research too through offering
            research grants on areas of policy relevance to the Asia-Pacific
            countries. Call for research proposals will be advertised on APAEA.
          </Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
