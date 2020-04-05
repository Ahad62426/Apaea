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
  Accordion,
} from 'native-base';
import SideBar from '../Sidebar';
import {TColors} from '../../components/Styles';
import CstHeader from '../Headers';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import ChatIcon from '../../assets/Icons/chatSVG';
import {LoadingButton} from '../../components/Utilities';
import {CAccordian} from '../../components/Accordian';

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

const dataArray = [
  {
    title: 'Q: Publication ethics and publication malpractice statement',
    content:
      'All APAEA publications follow the publication ethics and malpractice statements developed for editors and authors by Wagner & Kleinert (2011).See https://publicationethics.org/node/11184',
  },
  {
    title: 'Q: Your Questions and Feedbacks',
    content: 'Please direct all questions and feedback to the attention of APAEA Secretary: contact@a-paea.org',
  }
];
//endregion

class FAQ extends Component {
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
          Screen={'FAQ'}
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
          <CAccordian dataArray={dataArray} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
