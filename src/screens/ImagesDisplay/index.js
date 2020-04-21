//references Region
import React, {Component} from 'react';
import { View, Modal, TouchableOpacity, Platform, ScrollView } from 'react-native';
import {
  Container,
  Title,
  Icon,
} from 'native-base';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {TColors} from '../../components/Styles';
import {connect} from 'react-redux';
import CommonStyles, { DynamicM } from '../../components/Styles';
import { customisedAction } from '../../redux/actions';
import { HIDE_IMAGES_SCREEN, BASE_URL } from '../../constants';

class ImagesDisplay extends Component {
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
          style={{ backgroundColor: '#E2E9F5' }}>
          <View style={{height: 0}}>
            <View
              style={{
                height: Platform.OS === "ios" ? 290 : 255,
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
            onPress={() => customisedAction(HIDE_IMAGES_SCREEN)}
          >
            <Icon name="back" type="AntDesign" style={{ color: "white" }}></Icon>
          </TouchableOpacity>
          <View
              style={{
                marginTop: Platform.OS === "ios" ? 25 : 0,
                marginBottom: 15,
                alignItems: 'center'
              }}>
                {data && <Title>{data.title}</Title>}
            </View>
          {data ?
            <View
              style={[
                DynamicM(0, 0, 10, 10),
                CommonStyles.BoxShadow,
                {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    padding: 10,
                    marginVertical: 20,
                    justifyContent: "center",
                    backgroundColor: 'white',
                    height: "100%",
                },
              ]}
            >
              {data.images ?
                <ScrollView style={{ marginBottom: 40 }}>
                  {data.images.map(image => 
                    <Image 
                      indicator={Progress.Pie}
                      indicatorProps={{
                        borderWidth: 0,
                        color: TColors.bgColorPrimary,
                        unfilledColor: TColors.lightGray,
                      }}
                      borderRadius={10}
                      resizeMethod="resize"
                      key={image.path}
                      style={{ width: "100%", aspectRatio: 2, resizeMode: "cover", marginTop: 10, marginBottom: 10 }}
                      source={{ uri: `${BASE_URL}/dev/${image.path}`, cache: "force-cache" }} />
                  )}
                </ScrollView>
              : null}
            </View>
          : null }
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = ({ imagesScreenReducer : { display, data } }) => ({
  display, data
});

export default connect(mapStateToProps, { customisedAction })(ImagesDisplay);
