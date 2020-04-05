import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Text, View} from 'native-base';
import {Col, Row,} from 'react-native-easy-grid';
import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  DynamicBgColor
} from '../../components/Styles';
import {CButton, CLogo} from '../../components/Utilities';
import Meta from '../../i18n/en/en.components';

export default class Assistant1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
    };
    this;
  }
  animateLogo = val => {
    this.setState({
      Size: val ? 40 : 80,
    });
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
               <Row style={[CommonStyles.col, CommonStyles.vthc]}>
                 <Text style={[DynamicFntW('700'),CommonStyles.txtWhite, {alignSelf: 'stretch'}]}>
                   {Meta.assitantScreen1Heading}
                 </Text>
                 <Text style={[CommonStyles.txtColorSub,CommonStyles.txtWhite, DynamicP(10, 10, 0, 0)]}>
                   {Meta.assitantScreen1SubHeading}
                 </Text>
               </Row>
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
              onPress={() => this.props.navigation.navigate('AssitantScreen2')}>
              <Text
                style={[
                  CommonStyles.textCenter,
                  DynamicFntW('700'),
                  CommonStyles.uppercase,
                  CommonStyles.white,
                ]}>
                Nice to meet you
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
     
    );
  }
}
