//references Region
import React, {Component} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import {TColors} from '../../components/Styles';
import CstHeader from '../Headers';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import {CAccordian} from '../../components/Accordian';

import CommonStyles, { DynamicM, DynamicFntW, DynamicFntSize } from '../../components/Styles';
//endregion

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: true,
    };
  }

  render() {
    const { loading, dataKey, data, navigation } = this.props;
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
          Screen={navigation.state.params.title}
        />
        <View style={{height: 0}}>
          <View
            style={{
              height: 200,
              backgroundColor: TColors.bgColorPrimary,
            }}></View>
        </View>
                <View
                    style={[
                        DynamicM(0, 0, 10, 10),
                        CommonStyles.BoxShadow,
                        {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginVertical: 20,
                            backgroundColor: 'white',
                            height: "100%",
                            flex: 1,
                        },
                    ]}
                >
            {loading ?
              <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                <ActivityIndicator size="large" color={TColors.bgSecondary} />
              </View>
                : data[dataKey] && data[dataKey].length ?
                  <CAccordian dataArray={data[dataKey]} />
                : <View style={[CommonStyles.hc, DynamicM(20, 0, 0, 0)]}>
                      <Text style={[DynamicFntW("700"), DynamicFntSize(15)]}>No Data available For {navigation.state.params.title}s.</Text>
                      <Text style={[CommonStyles.txtColorSub, DynamicFntSize(12)]}>Sorry for the inconvenience</Text>
                  </View>
            }
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ metaDataReducer: { loading, dataKey, data } }) => ({ 
    loading, dataKey, data
});

export default connect(mapStateToProps, {})(FAQ);
