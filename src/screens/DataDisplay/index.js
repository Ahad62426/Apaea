//references Region
import React, {Component} from 'react';
import {View, Modal, TouchableOpacity, Platform } from 'react-native';
import {
  Container,
  Content,
  Label,
  Title,
  Text,
  Icon,
  Left
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

          <TouchableOpacity
            style={{ 
              zIndex: 10,
              position: 'relative',
              top: Platform.OS === "ios" ? 50 : 20,
              left: 10
            }}
            onPress={() => customisedAction(HIDE_DATA_SCREEN)}
          >
            <Icon name="back" type="AntDesign" style={{ color: "white" }}></Icon>
          </TouchableOpacity>
          <View
              style={{
                marginTop: Platform.OS === "ios" ? 25 : 0,
                marginBottom: 15,
                alignItems: 'center'
              }}>
                {data && <Title>{data.header}</Title>}
            </View>
          {data ?
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
              {data.title && <Label
                style={[DynamicP(10, 10, 0, 0), {fontSize: 18, fontWeight: '700'}]}>
                {data.title}
              </Label>}

              {data.heading && <Label
                style={[DynamicP(10, 10, 0, 0), {fontSize: 18, fontWeight: '700'}]}>
                {data.heading}
              </Label>}

              {data.excerpt && 
                <View>
                  <Label
                    style={[DynamicP(10, 10, 0, 0), {fontSize: 16, fontWeight: '700'}]}>
                    Excerpt
                  </Label>
                  <Text style={{fontSize:13,lineHeight:20}}>
                    {data.excerpt.replace(/&nbsp;/g, ' ').replace(/  +/g, ' ')}
                  </Text>
                  <Text style={{fontSize:13,lineHeight:20}}>
                  </Text>
                  <Label
                    style={[DynamicP(10, 10, 0, 0), {fontSize: 16, fontWeight: '700'}]}>
                    Description
                  </Label>
                </View>
              }
              <View>
                <Text style={{fontSize:13,lineHeight:20}}>
                  {data.description.replace(/&nbsp;/g, ' ').replace(/  +/g, ' ')}
                </Text>
              </View>
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
