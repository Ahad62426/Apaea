//references Region
import React, {Component} from 'react';
import {View, ActivityIndicator } from 'react-native';
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

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loadingData, aboutUs, customisedAction } = this.props;
    return (
      <Container
        style={{
          backgroundColor: '#E2E9F5',
        }}>

        <NavigationEvents onDidFocus={() => {
          if (!loadingData && !aboutUs) customisedAction(GET_BOARDING_DATA);
        }} />
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
          {loadingData ? 
            <View style={[{ flex: 1 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
              <ActivityIndicator style={{ marginTop: 20 }} size="large" color={TColors.bgSecondary} />
            </View>
            : aboutUs ?
              <Text style={{fontSize:13,lineHeight:20}}>
                {aboutUs.description.replace('About Asia-Pacific AppliedEconomics Association ', '').trim()}
              </Text>
            : <View><Title style={{ fontSize: 14, color: TColors.bgSecondary }}>Data Not Available!</Title></View>
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ boardingDataReducer: { loadingData, aboutUs } }) => ({
  loadingData, aboutUs
});

export default connect(mapStateToProps, { customisedAction })(AboutUs);
