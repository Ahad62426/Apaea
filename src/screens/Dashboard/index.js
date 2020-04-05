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
  Body,
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

class Dashboard extends Component {
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
      <Container>
        <CstHeader
          isMenuRight={true}
          OpenMenu={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          Screen={'Home'}
        />
        <Content style={{paddingLeft: 30, paddingRight: 30}}>
          {/* <View style={styles.TabsContainer}>
            {FeatureMeta.map((Obj, index) => {
              if (index < 5) {
                    return this._getFeaturerBtn(Obj, index);
              }
            })}
          </View> */}
          <View style={[DynamicM(20, 20, 20, 20), {alignItems: 'center'}]}>
            <TouchableOpacity onPress={()=> this._takeMeTOChat()}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  height: 100,
                  backgroundColor: 'rgba(236, 244, 251, 1)',
                  borderRadius: 100 / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ChatIcon size={45} color={TColors.primaryColor} />
              </View>
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
           Member Services
          </Text>
          </View>
         
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
