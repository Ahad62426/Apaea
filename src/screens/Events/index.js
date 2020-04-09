//references Region
import React, { Component } from 'react';
import { View, ActivityIndicator, Alert, FlatList } from 'react-native';
import { Container } from 'native-base';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { CCard } from '../../components/Card';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';

import CommonStyles, { DynamicM } from '../../components/Styles';

const dataArray = [
    {
        title: '4th International Energy Finance Conference 2019',
        manager: 'Dinh Phan',
        price: "USD 400",
        accomodation: "USD",
        food: "USD",
        transport: "USD",
        discount: "%",
        total: "USD 400"

    },
    {
        title: '8th Applied Financial Modelling Conference	',
        manager: 'Dinh Phan',
        price: "USD 250",
        accomodation: "USD",
        food: "USD",
        transport: "USD",
        discount: "%",
        total: "USD 250"

    },
    {
        title: '4th International Energy Finance Conference 2019_Participants',
        manager: 'Dinh Phan',
        price: "USD 300",
        accomodation: "USD",
        food: "USD",
        transport: "USD",
        discount: "%",
        total: "USD 300"

    },



];
//endregion

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
        };
    }

    _takeMeTOChat = () => {
        this.props.navigation.navigate('ChatSc');
    };

    _showAlert(title, msg, btn) {
        Alert.alert(title, msg, [
            { text: btn == null ? 'Okay' : btn, onPress: () => { } },
        ]);
    }


    render() {
        const { loading, dataKey, data } = this.props
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
                    Screen={'Events'}
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
                            flex: 1,
                            backgroundColor: 'white',
                        },
                    ]}
                >
                    {loading ?
                        <ActivityIndicator style={{ flex: 1, flexDirection: "column", justifyContent: "center" }} size="large" color={TColors.bgSecondary} />
                        : <View style={{ flex: 1 }}>
                            <FlatList
                                data={data[dataKey]}
                                keyExtractor={(item, index) => `${item.id}`}
                                renderItem={({ item }) => CCard(Object.assign(item, { type: "eventCard" }))}
                                style={{ marginVertical: 8 }}
                            >
                            </FlatList>
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

export default connect(mapStateToProps, {})(Events);
