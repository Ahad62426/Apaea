//references Region
import React, {Component} from 'react';
import {View, Modal, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Label,
  Text,
  Icon
} from 'native-base';
import {TColors} from '../../components/Styles';
import {connect} from 'react-redux';
import CommonStyles, {
  DynamicP,
  DynamicM,
} from '../../components/Styles';
import { customisedAction } from '../../redux/actions';
import { HIDE_DATA_SCREEN } from '../../constants';

class DataDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { display, data, customisedAction } = this.props;
    return (
      <Modal
          transparent={true}
          visible={display}>
        <Container
          style={{
            backgroundColor: '#E2E9F5',
          }}>
          <View style={{height: 0}}>
            <View
              style={{
                height: 200,
                padding: 10,
                backgroundColor: TColors.bgColorPrimary
              }}></View>
          </View>
          <View
              style={{
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => customisedAction(HIDE_DATA_SCREEN)}
              >
                <Icon name="back" type="AntDesign" style={{ color: "white" }}></Icon>
              </TouchableOpacity>
              </View>
          {data ?
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
                {data.heading}
              </Label>

              <Text style={{fontSize:13,lineHeight:20}}>
                {data.description}
              </Text>
            </Content>
            : null
          }
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = ({ dataScreenReducer : { display, data } }) => ({
  display, data
});

export default connect(mapStateToProps, { customisedAction })(DataDisplay);
