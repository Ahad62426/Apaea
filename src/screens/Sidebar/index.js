import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, Alert, Image } from 'react-native';
import {
  Text,
  Container,
  List,
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
import { DynamicM } from '../../components/Styles';
import UserImg from '../ThumbNail';
import { CSvg } from '../../components/SVGassets';
import { customisedAction } from '../../redux/actions';
import I18n from '../../i18n'
import { setLanguage } from '../../helperMethods/localstorage';

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

  _checkDrawer(Name, Navigation, params) {
    this.setState(
      {
        activeMenu: Name,
      },
      () => {
        this.props.navigation.navigate(Navigation, params);
        if (Navigation) this.props.navigation.closeDrawer();
      },
    );
  }

  _BGColor(user) {
    return (
      <View
        style={{
          width: '100%',
          height: Platform.OS === "ios" ? 120 : 90,
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
            top: Platform.OS === "ios" ? 40 : 10,
            padding: 5,
            margin: 10,
          }}>
          {this._getThumbnail(user)}
        </View>
        <View style={{ position: 'absolute', alignSelf: 'center', top: Platform.OS === "ios" ? 60 : 30 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: '#FFFFFF',
              }}>
              {user ? user.name : I18n.t('no_login')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _getThumbnail(user) {
    if (user) {
      const name = user.name.split(' ');
      return (
        <UserImg
          UserInfo={{
            FirstName: name[0] || '',
            LastName: name[1] || '',
            UserImage: '',
            UserImageColor: '#3E83FF',
          }}
          size={40}
        />
      );
    }
  }

  _renderContent = item => {
    const { loading, data, user } = this.props;
    return item.subMenu.map(o => (
      <ListItem
        style={{ marginLeft: 0, borderColor: 'transparent' }}
        key={1}
        onPress={() => {
          if (o.authRequired && !user) {
            Alert.alert(I18n.t('signin_required'))
            this.setState({ activeMenu: '' })
            return this.props.navigation.navigate('Welcome')
          }
          if (o.action) this.props.customisedAction(o.action, o.dataKey)
          if (o.metaDataAction) {
            if (!data[o.dataKey] && !loading) this.props.customisedAction(o.metaDataAction, { dataKey: o.dataKey, sub_url: o.sub_url, extraKey: o.extraKey })
          }
          this._checkDrawer(o.Text, o.Navigation, { title: I18n.t(o.Text), dataKey: o.dataKey })
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
          <Text style={[{ marginLeft: 5 }, this.state.activeMenu === o.Text && { color: 'white' }]}>{I18n.t(o.Text)}</Text>
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
        <Text style={{ fontWeight: '600' }}>{I18n.t(item.Text)}</Text>
        {expanded ? (
          <AntIcon name="caretdown" size={10} color="#0E3968" />
        ) : (
            <AntIcon name="caretdown" size={10} color="#0E3968" />
          )}
      </View>
    );
  }

  render() {
    const { loading, data, user } = this.props;
    return (
      <Container>
        {this._BGColor(user)}
        {!user ? 
          <View
            style={{
              alignSelf: 'stretch',
              backgroundColor: this.state.bgColor,
              flexDirection: 'row',
              position: 'relative',
              zIndex: 10,
              top: Platform.OS === "ios" ? 100 : 70,
            }}>
            <Item
                fixedLabel
                style={[{ flex: 1, borderColor: 'transparent', alignItems: 'center', justifyContent: 'center' }]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignIn')}
                style={[ DynamicM(5, 5, 0, 0),
                  {
                    flex: 1,
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Col size={4}>
                  <CSvg size={20} name="login" />
                </Col>
                <Col size={8}>
                  <Text style={{ padding: 5, color: 'white' }}>{I18n.t('login')}</Text>
                </Col>
              </TouchableOpacity>
            </Item>
            <Item
                fixedLabel
                style={[{ flex: 1, borderColor: 'transparent', alignItems: 'center', justifyContent: 'center' }]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={[ DynamicM(5, 5, 0, 0),
                  {
                    flex: 1,
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Col size={4}>
                  <CSvg size={20} name="joinUS" />
                </Col>
                <Col size={8}>
                  <Text style={{ padding: 5, color: 'white' }}>{I18n.t('joinus')}</Text>
                </Col>
              </TouchableOpacity>
            </Item>
          </View>
          : null
        }
        <Content style={{ backgroundColor: '#81A2DA' }}>
          <List style={{ marginTop: 90 }}>
            {DrawerMeta.map((Obje, index) => {
              return Obje.subMenu === undefined ? (
                <ListItem
                  key={index}
                  style={{ borderColor: 'transparent', marginLeft: 0 }}
                  onPress={() => {
                    if (Obje.action) this.props.customisedAction(Obje.action, Obje.dataKey)
                    if (Obje.metaDataAction) {
                      if (!data[Obje.dataKey] && !loading) this.props.customisedAction(Obje.metaDataAction, { dataKey: Obje.dataKey, sub_url: Obje.sub_url })
                    }
                    this._checkDrawer(Obje.Text, Obje.Navigation, { title: I18n.t(Obje.Text), dataKey: Obje.dataKey })
                  }}>
                  <Body style={{ flex: 10 }}>
                    <Text
                      style={
                        this.state.activeMenu === Obje.Text
                          ? { color: 'white' }
                          : {}
                      }>
                      {I18n.t(Obje.Text)}
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
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={async () => {
                await setLanguage('en')
                this.props.navigation.closeDrawer();
                this.props.navigation.navigate('Welcome', { lang: 'en' });
              }}
              style={{ margin: 10, marginRight: 20 }}>
              <Image
                style={{ height: 20, width: 40, borderRadius: 3 }}
                source={require('../../assets/Icons/usflag.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                await setLanguage('zh')
                this.props.navigation.closeDrawer();
                this.props.navigation.navigate('Welcome', { lang: 'zh' });
              }}
              style={{ margin: 10, marginRight: 20 }}>
              <Image
                style={{ height: 20, width: 40, borderRadius: 3 }}
                source={require('../../assets/Icons/chflag.png')} />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ sessionReducer: { user }, metaDataReducer: { loading, data } }) => ({ 
  user, loading, data
});

export default connect( mapStateToProps, { customisedAction })(SideBar);
