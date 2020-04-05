import React, { Component } from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import { Container, Text, Item, Input, Card, CheckBox, Body, Content, Button } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import { Col, Row, Grid } from 'react-native-easy-grid';
import CommonStyles, {
  DynamicP,
  DynamicFntW,
  DynamicM,
  DynamicBgColor,
  DynamicBDRadius,
  DynamicFntSize,
} from './../../components/Styles';
import { CLogo, validateEmail, CAlert } from './../../components/Utilities';

import { CButton, GradientBtn } from './../../components/Utilities';
import Meta from './../../i18n/en/en.components';
export default class Agreement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: 80,
      checked: false,
    };
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
          <View style={[{ flex: 4 }, CommonStyles.vchb]}>
            <CLogo height={100} width={100} />
          </View>

          <View style={[{ flex: 10 }, DynamicP(20, 20, 20, 20), CommonStyles.vcht]}>


            <Text style={[CommonStyles.textCenter, CommonStyles.txtWhite, DynamicFntW('700')]}>
              {Meta.agreementHeading}
            </Text>
            <Text
              style={[
                CommonStyles.textCenter,
                CommonStyles.txtWhite,
                DynamicP(10, 10, 0, 0),
              ]}>
              {Meta.agreementSubHeading}
            </Text>
            <View style={[CommonStyles.row, CommonStyles.hc]}>
              <CheckBox
                style={[CommonStyles.hc]}
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
                color="green"
              />
              <Text style={[CommonStyles.txtWhite, DynamicP(0, 0, 20, 20), DynamicFntSize(13)]}>
                {Meta.agreementCheckbox}
              </Text>
            </View>



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
            onPress={() => this.props.navigation.navigate('AssitantScreen1')}>
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
