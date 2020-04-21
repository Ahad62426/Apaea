//references Region
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { CCard } from '../../components/Card';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { CHeading } from '../../components/Utilities';

import CommonStyles, { DynamicM } from '../../components/Styles';
import I18n from '../../i18n';

class MyAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dataKey, heading } = this.props.navigation.state.params;
        const { loading, data } = this.props;
        let ScreenData = data[dataKey];
        if (dataKey === "conference" && ScreenData.data) ScreenData = ScreenData.data;
        return (
            <Container
                style={{
                    backgroundColor: '#E2E9F5',
                }}>

                <CstHeader
                    isMenuRight={true}
                    isProfile={true}
                    OpenMenu={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    Screen={I18n.t('MyAccount')}
                />
                <View style={{ height: 0 }}>
                    <View style={{ height: 200, backgroundColor: TColors.bgColorPrimary }}></View>
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
                    <CHeading
                        style={[{}, DynamicM(10, 5, 0, 0), CommonStyles.hc]}
                        text={heading}
                        borderWidth={100}
                    >

                    </CHeading>

                    {loading ?
                        <ActivityIndicator style={{ flex: 1, flexDirection: "column", justifyContent: "center" }} size="large" color={TColors.bgSecondary} />
                        : <View style={{ flex: 1 }}>
                            <FlatList
                                data={ScreenData}
                                keyExtractor={item => `${item.id}`}
                                renderItem={({ item }) => CCard(Object.assign(item, { type: "actionCard" }))}
                            >
                            </FlatList>
                        </View>
                    }

                </View>
            </Container >
        );
    }
}

const mapStateToProps = ({ myAccountReducer: { loading, data } }) => ({ loading, data });

export default connect(mapStateToProps, {})(MyAccount);
