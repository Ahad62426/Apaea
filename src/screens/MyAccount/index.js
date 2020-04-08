//references Region
import React, { Component } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { Container } from 'native-base';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { CCard } from '../../components/Card';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { CHeading } from '../../components/Utilities';

import CommonStyles, { DynamicM } from '../../components/Styles';

const dataArray = [
    {
        title: 'Do financial technology firms influence bank performance?',
        author: 'Dinh Phan',
    },
    {
        title: 'Do financial technology firms influence bank performance?',
        author: 'Dinh Phan',
    },
    {
        title: 'Do financial technology firms influence bank performance?',
        author: 'Dinh Phan',
    },
    {
        title: 'Do financial technology firms influence bank performance?',
        author: 'Dinh Phan',
    },
    {
        title: 'Do financial technology firms influence bank performance?',
        author: 'Dinh Phan',
    },
    {
        title: 'Do financial technology firms influence bank performance?',
        author: 'Dinh Phan',
    },

];

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
            dataArray: []
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
        const { data, heading } = this.props.navigation.state.params;
        const { loading } = this.props;
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
                    Screen={'My Account'}
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

                    
                    <FlatList
                        data={data}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => CCard(Object.assign(item, { type: "actionCard" }))}
                    >
                    </FlatList>

                </View>
            </Container >
        );
    }
}

const mapStateToProps = ({ myAccountReducer: { loading } }) => ({ loading });

export default connect(mapStateToProps, {})(MyAccount);
