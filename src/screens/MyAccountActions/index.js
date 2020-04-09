//references Region
import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Container, Content } from 'native-base';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { LoadingButton } from '../../components/Utilities';
import CommonStyles, { DynamicM } from '../../components/Styles';
import NavigationService from '../../helperMethods/navigationService';
import { customisedAction } from '../../redux/actions';
import { SET_ACCOUNT_MENU } from '../../constants'

class MyAccountActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
        };
    }

    _takeMeTOSignUp = () => {
        NavigationService.navigate('Welcome');
    };

    render() {
        const { accountMenu } = this.props;
        return (
            <Modal
                transparent={true}
                visible={accountMenu}>
                <Container
                    style={{
                        backgroundColor: 'rgba(14,57,104, 0.85)',
                    }}>
                    <CstHeader
                        isMenuRight={true}
                        OpenMenu={null}
                        Screen={'My Account'}
                    />
                    <View style={{ height: 0 }}>
                        <View
                            style={{
                                height: 200,
                                backgroundColor: TColors.bgColorPrimary,
                            }}></View>
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
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0), {
                                backgroundColor: '#31567E', borderWidth: 1,
                                borderColor: "white"
                            }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Assigned Working Paper",
                                    dataKey: "workingpaper"
                                })
                            }}
                        />

                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'My Submitted Working Paper'}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Submitted Working Paper",
                                    dataKey: "workinhistory"
                                })
                            }}
                        />

                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Assigned Review Paper'}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Assigned Review Paper",
                                    dataKey: "reviewpaper"
                                })
                            }}
                        />

                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Submitted Review Paper'}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Submitted Review Paper",
                                    dataKey: "reviewhistory"
                                })
                            }}
                        />

                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Assigned Proof Reading Scripts'}
                            textStyle={{ fontSize: 17 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Assigned Proof Reading Scripts",
                                    dataKey: "proofreading"
                                })
                            }}
                        />

                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Submitted Proof Reading Scripts'}
                            textStyle={{ fontSize: 16 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Submitted Proof Reading Scripts",
                                    dataKey: "proofpaper"
                                })
                            }}
                        />
                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Conference Paper Assigned'}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Assigned Conference Paper",
                                    dataKey: "conferencehistory1"
                                })
                            }}
                        />
                        <LoadingButton
                            isBlock={true}
                            submitting={this.state.submitting}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'Conference Paper Submission'}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: "Conference Paper Submission",
                                    dataKey: "conference"
                                })
                            }}
                        />
                    </Content>
                </Container>
            </Modal>
        );
    }
}

const mapStateToProps = ({ myAccountReducer: { accountMenu, data } }) => {
    const {
        workingpaper,
        workinhistory,
        reviewpaper,
        reviewhistory,
        proofreading,
        proofpaper
    } = data;
    return {
        accountMenu,
        workingpaper,
        workinhistory,
        reviewpaper,
        reviewhistory,
        proofreading,
        proofpaper
    };
}

export default connect(mapStateToProps, { customisedAction })(MyAccountActions);
