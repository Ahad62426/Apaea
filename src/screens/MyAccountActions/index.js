//references Region
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
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
    Text,

} from 'native-base';
import SideBar from '../Sidebar';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import ChatIcon from '../../assets/Icons/chatSVG';
import { LoadingButton } from '../../components/Utilities';
import IonIcons from 'react-native-vector-icons/Entypo';

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

//endregion

class MyAccountActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
        };
    }

    _takeMeTOSignUp = () => {
        this.props.navigation.navigate('SingIn');
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
                    backgroundColor: 'rgba(14,57,104, 0.85)',
                }}>
                <CstHeader
                    isMenuRight={true}
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
                        }}></View>
                </View>
                <View style={[{
                    flexDirection: "row-reverse"


                }, DynamicM(0, 16, 10, 12)]}>
                    <Icon name="closecircleo" type="AntDesign" style={{
                        color: "white",

                    }}></Icon>
                </View>

                <Content
                    contentContainerStyle={{
                        flex: 1, justifyContent: "center", alignItems: "center",
                        paddingHorizontal: 20
                    }}
                    style={[
                        DynamicM(0, 0, 10, 10),
                        CommonStyles.BoxShadow,
                        {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            backgroundColor: "#31567E",
                        },
                    ]}>

                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'My Assigned Working Paper'}
                        style={[DynamicM(10, 5, 0, 0), {
                            backgroundColor: '#31567E', borderWidth: 1,
                            borderColor: "white"
                        }]}
                        callback={() => this._takeMeTOSignUp()}
                    />

                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'My Submitted Working Paper'}
                        style={[DynamicM(10, 5, 0, 0),
                        { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                        callback={() => this._takeMeTOSignUp()}
                    />

                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'Assigned Review Paper'}
                        style={[DynamicM(10, 5, 0, 0),
                        { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                        callback={() => this._takeMeTOSignUp()}
                    />

                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'Submitted Review Paper'}
                        style={[DynamicM(10, 5, 0, 0),
                        { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                        callback={() => this._takeMeTOSignUp()}
                    />

                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'Assigned Proof Reading Scripts'}
                        style={[DynamicM(10, 5, 0, 0),
                        { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                        callback={() => this._takeMeTOSignUp()}
                    />

                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'Submitted Proof Reading Scripts'}
                        style={[DynamicM(10, 5, 0, 0),
                        { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                        callback={() => this._takeMeTOSignUp()}
                    />
                    <LoadingButton
                        isBlock={true}
                        submitting={this.state.submitting}
                        rounded={true}
                        loaderColor={'white'}
                        textColor="white"
                        btnText={'Conference Paper Submission'}
                        style={[DynamicM(10, 5, 0, 0),
                        { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                        callback={() => this._takeMeTOSignUp()}
                    />

                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountActions);
