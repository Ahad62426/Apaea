//references Region
import React, { Component } from 'react';
import { View, ActivityIndicator, Text, FlatList } from 'react-native';
import { Container } from 'native-base';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { CPartnerCard } from '../../components/Card';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import CommonStyles, { DynamicM, DynamicFntW, DynamicFntSize } from '../../components/Styles';
//endregion

class Partners extends Component {
    constructor(props) {
        super(props);
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
                <View style={{ height: 0 }}>
                    <View
                        style={{
                            height: 200,
                            backgroundColor: TColors.bgColorPrimary,
                        }}>


                    </View>

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
                            height: "100%",
                            flex:1,
                            backgroundColor: 'white',
                        },
                    ]}
                >
                    {loading ?
                        <ActivityIndicator style={{ flex: 1, flexDirection: "column", justifyContent: "center" }} size="large" color={TColors.bgSecondary} />
                        : data[dataKey] ? data[dataKey].length ?
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={data[dataKey]}
                                    keyExtractor={(item, index) => `${item.id}`}
                                    numColumns={2}
                                    renderItem={({ item }) => CPartnerCard(Object.assign(item, { type: "partnerCard" }))}

                                    style={{ marginVertical: 15}}
                                >
                                </FlatList>
                            </View>
                        : <View style={[CommonStyles.hc, DynamicM(20, 0, 0, 0)]}>
                            <Text style={[DynamicFntW("700"), DynamicFntSize(15)]}>No Data available For {navigation.state.params.title}.</Text>
                            <Text style={[CommonStyles.txtColorSub, DynamicFntSize(12)]}>Sorry for the inconvenience</Text>
                        </View> 
                        : <View style={[CommonStyles.hc, DynamicM(20, 0, 0, 0)]}>
                            <Text style={[DynamicFntW("700"), DynamicFntSize(15)]}>Unable to fetch data</Text>
                        </View>
                    }
                </View>
            </Container >
        );
    }
}

const mapStateToProps = ({ metaDataReducer: { loading, dataKey, data } }) => ({ 
    loading, dataKey, data
});

export default connect(mapStateToProps, {})(Partners);
