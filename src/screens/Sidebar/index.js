import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import {
  Text,
  Container,
  List,
  Left,
  Body,
  Accordion,
  ListItem,
  Content,
  Item,
} from 'native-base';
import { Col } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import AntIcon from 'react-native-vector-icons/AntDesign';
import DrawerMeta from '../Sidebar/DrawerMeta';
import Home from '../../assets/Icons/Home';
import { DynamicM } from '../../components/Styles';
import UserImg from '../ThumbNail';
import { CSvg } from '../../components/SVGassets';

import { customisedAction } from '../../redux/actions';
import { GET_OUR_PEOPLE } from '../../constants'

const deviceWidth = Dimensions.get('window').width;
const pLeft = deviceWidth > 480 ? 15 : 15;
const dataArray = [
  {
    title: 'First Element',
    content: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    title: 'Second Element',
    content: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    title: 'Third Element',
    content: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      activeMenu: '',
      theme: '',
      title: '',
      subtitle: '',
      btn1Text: '',
      bgColor: '#0E3968',
    };


  }

  _checkDrawer(Navigation) {
    this.setState(
      {
        activeMenu: Navigation,
      },
      () => {
        this.props.navigation.navigate(Navigation);
        this.props.navigation.closeDrawer();
      },
    );
  }
  _bootstrapAsync = () => {
    AsyncStorage.clear().then(() => console.log('Cleared'));
    this.props.navigation.navigate('CompanyCode');
  };
  _BGColor() {
    return (
      <View
        style={{
          width: '100%',
          height: 90,
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: this.state.bgColor,
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            position: 'absolute',
            alignSelf: 'flex-start',
            top: 25,
            padding: 5,
            margin: 10,
          }}>
          {this._getThumbnail(this.props.UserData)}
        </View>
        <View style={{ position: 'absolute', alignSelf: 'center', top: 50 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('MyAccount');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFFFFF',
              }}>
              John Doe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _getThumbnail(Obj) {
    return (
      <UserImg
        UserInfo={{
          FirstName: 'John',
          LastName: 'Doe',
          UserImage: '',
          UserImageColor: '#3E83FF',
        }}
        size={40}
      />
    );
  }

  _getSvg(SvgId) {
    switch (SvgId) {
      case 0:
        return <Home size={27} color={this.state.bgColor} />;
      default:
        break;
    }
  }
  Logout = () => {
    // this.setState({
    //   showAlert: true,
    //   theme: "warning",
    //   title: "Logout",
    //   subTitle:
    //     "Are You sure you want to Logout By Clicking Logout Your session Will be remove",
    //   btn1Text: "Logout",
    //   actionFunction: () => this.LogoutUser()
    // });
    Alert.alert(
      'Logout',
      'Are You sure you want to Logout? By Clicking Logout Your session Will be removed ',
      [
        {
          text: 'Logout',
          onPress: () => {
            this.LogoutUser();
          },
        },
        { text: 'Cancel', onPress: () => { } },
      ],
    );
  };
  LogoutUser = () => {
    this.props
      .removeUserToken()
      .then(async () => {
        await this.props.reset(true);
        this.props.navigation.navigate('Auth');
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  changeCompany = () => {
    // this.setState({
    //   showAlert: true,
    //   theme: "warning",
    //   title: "Change Learning Center Code",
    //   subTitle: "Are you sure you want to change the Learning Center Code?",
    //   btn1Text: "Change",
    //   actionFunction: () => this._bootstrapAsync()
    // });
    Alert.alert(
      'Change Learning Center Code',
      'Are you sure you want to change the Learning Center Code? ',
      [
        {
          text: 'Change',
          onPress: () => {
            this._bootstrapAsync();
          },
        },
        { text: 'Cancel', onPress: () => { } },
      ],
    );
  };
  handleClose = () => {
    this.setState({ showAlert: false });
  };

  _renderContent = item => {
    return item.subMenu.map(o => (
      <ListItem
        style={{ marginLeft: 0, borderColor: 'transparent' }}
        key={1}
        onPress={() => {
          if (o.Navigation === "OurPeople") {
            this.props.customisedAction(GET_OUR_PEOPLE, o.Text);
            this.props.navigation.closeDrawer();
          };
          this.props.navigation.navigate(o.Navigation, { title: o.Text })
        }}>
        <Body
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10 / 2,
              width: 10,
              height: 10,
            }}></View>
          <Text style={{ marginLeft: 5 }}>{o.Text}</Text>
        </Body>
      </ListItem>
    ));
  }

  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <Text style={{ fontWeight: '600' }}>{item.Text}</Text>
        {expanded ? (
          <AntIcon name="caretdown" size={10} color="#0E3968" />
        ) : (
            <AntIcon name="caretdown" size={10} color="#0E3968" />
          )}
      </View>
    );
  }

  render() {
    return (
      <Container>
        {this._BGColor()}
        <View
          style={{
            alignSelf: 'stretch',
            backgroundColor: this.state.bgColor,
            flexDirection: 'row',
            position: 'relative',
            zIndex: 10,
            top: 80,
            paddingTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}
            style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            <Item
              fixedLabel
              style={[
                DynamicM(5, 5, 0, 0),
                {
                  borderColor: 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Col size={4}>
                <CSvg size={20} name="login" />
              </Col>
              <Col size={8}>
                <Text style={{ padding: 5, color: 'white' }}>Login</Text>
              </Col>
            </Item>
          </TouchableOpacity>
          <TouchableOpacity

            onPress={() => { this.props.navigation.navigate('SignUp') }}
            style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>

            <Item
              fixedLabel
              style={[
                DynamicM(5, 5, 0, 0),
                {
                  borderColor: 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>

              <Col size={4}>
                <CSvg size={20} name="joinUS" />
              </Col>
              <Col size={8}>
                <Text style={{ padding: 5, color: 'white' }}>Join Us</Text>
              </Col>
            </Item>
          </TouchableOpacity>
        </View>
        <Content style={{ backgroundColor: '#81A2DA' }}>
          <List style={{ marginTop: 90 }}>
            {DrawerMeta.map((Obje, index) => {
              return Obje.subMenu === undefined ? (
                <ListItem
                  key={index}
                  style={{ borderColor: 'transparent', marginLeft: 0 }}
                  onPress={() => {
                    this._checkDrawer(Obje.Navigation);
                  }}>
                  <Body style={{ flex: 10 }}>
                    <Text
                      style={
                        this.state.activeMenu === Obje.Navigation
                          ? { color: 'white' }
                          : {}
                      }>
                      {Obje.Text}
                    </Text>
                  </Body>
                </ListItem>
              ) : (
                  <Accordion
                    dataArray={[Obje]}
                    style={{ borderColor: 'transparent' }}
                    headerStyle={{ backgroundColor: '#b7daf8' }}
                    contentStyle={{ backgroundColor: '#ddecf8' }}
                    renderContent={this._renderContent}
                    renderHeader={this._renderHeader}
                  />
                );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

export default connect(
  null, {
    customisedAction
})(SideBar);
