//references Region
import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {
  Container,
  Content,
  Label,
  Text,
} from 'native-base';
import {TColors} from '../../components/Styles';
import CstHeader from '../Headers';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';

import CommonStyles, {
  DynamicP,
  DynamicM,
} from '../../components/Styles';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, aboutUs } = this.props;
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
          {loading || !aboutUs ? null :
            <Text style={{fontSize:13,lineHeight:20}}>
              {aboutUs.description.replace('About Asia-Pacific AppliedEconomics Association ', '').trim()}
            </Text>
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ boardingDataReducer: { loading, aboutUs } }) => ({
  loading, aboutUs
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
