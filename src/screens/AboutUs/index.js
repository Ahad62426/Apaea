//references Region
import React, {Component} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {
  Container,
  Content,
  Label,
  Text,
  Title
} from 'native-base';
import {TColors} from '../../components/Styles';
import CstHeader from '../Headers';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import CommonStyles, {
  DynamicP,
  DynamicM,
} from '../../components/Styles';
import { customisedAction } from '../../redux/actions';
import { GET_BOARDING_DATA } from '../../constants';
import I18n from '../../i18n'

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { boardingDataReducer, customisedAction } = this.props;
    const { loadingData } = this.props.boardingDataReducer;
    const { title, dataKey } = this.props.navigation.state.params;
    const data = boardingDataReducer[dataKey];
    return (
      <Container
        style={{
          backgroundColor: '#E2E9F5',
        }}>

        <NavigationEvents onDidFocus={() => {
          if (!loadingData && boardingDataReducer[dataKey]) customisedAction(GET_BOARDING_DATA);
        }} />
        <CstHeader
          isMenuRight={true}
          OpenMenu={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          Screen={title}
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
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: 'white',
            },
          ]}>
          {dataKey === 'aboutUs' ?
            <Label
              style={[DynamicP(10, 10, 0, 0), {fontSize: 14, fontWeight: '700'}]}>
              {I18n.t('about_us')}
            </Label> : null
          }
          {loadingData ? 
            <View style={[{ flex: 1 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
              <ActivityIndicator style={{ marginTop: 20 }} size="large" color={TColors.bgSecondary} />
            </View>
            : data ?
              <View>
                <Text style={{fontSize:13,lineHeight:20}}>
                  {data.description.replace(/&nbsp;/g, ' ').replace(/  +/g, ' ').replace('About Asia-Pacific AppliedEconomics Association ', '').replace(' contact.apaea@gmail.com', ':').trim()}
                </Text>
                {dataKey === 'editorial_services' ?
                  <TouchableOpacity
                    onPress={() => Linking.openURL('mailto:support@example.com')}
                  >
                    <Text style={{ color: TColors.bgSecondary, fontSize:13, lineHeight:20 }}>
                      contact.apaea@gmail.com
                    </Text>
                  </TouchableOpacity> : null
                }
              </View>
            : <View><Title style={{ fontSize: 14, color: TColors.bgSecondary }}>Data Not Available!</Title></View>
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ boardingDataReducer }) => ({
  boardingDataReducer
});

export default connect(mapStateToProps, { customisedAction })(AboutUs);
