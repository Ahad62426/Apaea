//references Region
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, FlatList } from 'react-native';
import {
    Container,
    Drawer,
    Button,
    Icon,
    Content,
    Footer,
    FooterTab,
    Left,
    Right,
    Label,
    Accordion,
} from 'native-base';
import SideBar from '../Sidebar';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { CCard } from '../../components/Card';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import ChatIcon from '../../assets/Icons/chatSVG';
import { LoadingButton, CHeading } from '../../components/Utilities';

import CommonStyles, {
    DynamicP,
    DynamicFntW,
    DynamicM,
    DynamicBgColor,
    DynamicHeight,
    DynamicBDRadius,
    DynamicBorderPosition,

} from '../../components/Styles';

const TabsSize = CommonStyles.fullWidth > 480 ? 100 : 50;

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
//endregion

class MyAccount extends Component {
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
                        text={"Assigned Working Paper"}
                        borderWidth={100}
                    >

                    </CHeading>

                    <FlatList
                        data={this.props.productsListData}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item }) => CCard(Object.assign(item, { type: "actionCard" }))}
                    >
                    </FlatList>

                </View>
            </Container >
        );
    }
}
MyAccount.defaultProps = {
    productsListData: dataArray
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
