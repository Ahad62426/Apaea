//references Region
import React, {Component} from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { Container, Content } from 'native-base';
import {TColors} from '../../components/Styles';
import CstHeader from '../Headers';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation-drawer';
import {CAccordian} from '../../components/Accordian';

import CommonStyles, { DynamicM } from '../../components/Styles';
//endregion

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: true,
    };
  }

  render() {
    const { loading, dataKey, data } = this.props;
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
          Screen={this.props.navigation.state.params.title}
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
            {loading ?
              <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                <ActivityIndicator size="large" color={TColors.bgSecondary} />
              </View>
                : <CAccordian dataArray={data[dataKey]} />
            }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ metaDataReducer: { loading, dataKey, data } }) => ({ 
    loading, dataKey, data
});

export default connect(mapStateToProps, {})(FAQ);
