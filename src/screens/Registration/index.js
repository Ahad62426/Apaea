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
import { TColors, DynamicWidth, DynamicFntSize } from '../../components/Styles';
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

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
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
                    Screen={'Membership Type'}
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
                    ]}
                    contentContainerStyle={CommonStyles.hc}
                >

                    <Form style={[DynamicM(0, 10, 0, 0), DynamicP(10, 5, 5, 5)]}>
                     
                    <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="First Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="First Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >

                            <Input placeholder="Last Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Title" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                      
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Textarea style={[CommonStyles.inputRadius, DynamicP(10, 10, 10, 10), DynamicWidth("100%")
                                , { alignSelf: "flex-start" }]} rowSpan={4} bordered placeholder="Address" />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Institute" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="City" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="State" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Zip" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Phone Number" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]} />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input style={[
                                CommonStyles.inputRadius,
                                DynamicP(10, 10, 10, 10),
                                DynamicWidth("100%"),
                                CommonStyles.inputBgColor,
                                DynamicFntSize(15)
                            ]}
                            placeholder="Email Address"
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(5, 5, 0, 0)]}  >
                           
                            <Input style={[
                                CommonStyles.inputRadius,
                                DynamicP(10, 10, 10, 10),
                                DynamicWidth("100%"),
                                CommonStyles.inputBgColor,
                                DynamicFntSize(15)
                            ]} 
                            placeholder="Password"/>
                        </Item>
                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'SignUp'}
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
