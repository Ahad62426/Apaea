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
    Form,
    Item,
    Input,
    Label,
    Textarea,
    Text,
} from 'native-base';
import SideBar from '../Sidebar';
import { TColors, DynamicWidth } from '../../components/Styles';
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
    DynamicFntSize,
    DynamicBDRadius,
    DynamicBorderPosition,
} from '../../components/Styles';

const TabsSize = CommonStyles.fullWidth > 480 ? 100 : 50;

//endregion

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
        };
    }

    _takeMeTOWelcome = () => {
        this.props.navigation.navigate('Welcome');
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
                    OpenMenu={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    Screen={'Contact Us'}
                />
                <View style={{ height: 0 }}>
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

                    <Form style={[DynamicM(0, 10, 0, 0), DynamicP(10, 5, 5, 5)]}>
                        <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Email Address" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Subject" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Textarea
                                placeholder="Address"
                                style={[CommonStyles.inputRadius, DynamicP(10, 10, 10, 10), DynamicWidth("100%")
                                    , { alignSelf: "flex-start" }]} rowSpan={4} bordered />
                        </Item>
                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Send message'}
                            style={[DynamicM(25, 5, 0, 0), {
                                width: "90%", alignSelf: "center",
                                backgroundColor: TColors.bgSecondary,
                            }]}
                            callback={() => this._takeMeTOWelcome()}
                        />
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
