//references Region
import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Container, Content } from 'native-base';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { LoadingButton } from '../../components/Utilities';
import CommonStyles, { DynamicM } from '../../components/Styles';
import NavigationService from '../../helperMethods/navigationService';
import { customisedAction } from '../../redux/actions';
import { SET_ACCOUNT_MENU } from '../../constants'
import I18n from '../../i18n';

class MyAccountActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
        };
    }

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
                        Screen={I18n.t('MyAccount')}
                    />

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
                            btnText={I18n.t('AssignedWorkingPaper')}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0), {
                                backgroundColor: '#31567E', borderWidth: 1,
                                borderColor: "white"
                            }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('AssignedWorkingPaper'),
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
                            btnText={I18n.t('SubmittedWorkingPaper')}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('SubmittedWorkingPaper'),
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
                            btnText={I18n.t('AssignedReviewPaper')}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('AssignedReviewPaper'),
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
                            btnText={I18n.t('SubmittedReviewPaper')}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('SubmittedReviewPaper'),
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
                            btnText={I18n.t('AssignedProofReadingScripts')}
                            textStyle={{ fontSize: 17 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('AssignedProofReadingScripts'),
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
                            btnText={I18n.t('SubmittedProofReadingScripts')}
                            textStyle={{ fontSize: 16 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('SubmittedProofReadingScripts'),
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
                            btnText={I18n.t('AssignedConferencePaper')}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('AssignedConferencePaper'),
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
                            btnText={I18n.t('ConferencePaperSubmission')}
                            textStyle={{ fontSize: 18 }}
                            style={[DynamicM(10, 5, 0, 0),
                            { backgroundColor: '#31567E', borderWidth: 1, borderColor: "white" }]}
                            callback={() => {
                                this.props.customisedAction(SET_ACCOUNT_MENU, false)
                                NavigationService.navigate('MyAccount', {
                                    heading: I18n.t('ConferencePaperSubmission'),
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
