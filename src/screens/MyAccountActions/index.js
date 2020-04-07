//references Region
import React, { Component } from 'react';
import { View, Alert, Modal } from 'react-native';
import { Container, Icon, Content } from 'native-base';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { LoadingButton } from '../../components/Utilities';
import CommonStyles, { DynamicM, DynamicFntSize } from '../../components/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MyAccountActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
        };
    }

    _takeMeTOSignUp = () => {
        this.props.navigation.navigate('SingIn');
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
                            callback={() => this._takeMeTOSignUp()}
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
                            callback={() => this._takeMeTOSignUp()}
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
                            callback={() => this._takeMeTOSignUp()}
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
                            callback={() => this._takeMeTOSignUp()}
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
                            callback={() => this._takeMeTOSignUp()}
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
                            callback={() => this._takeMeTOSignUp()}
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
                            callback={() => this._takeMeTOSignUp()}
                        />
                    </Content>
                </Container>
            </Modal>
        );
    }
}

const mapStateToProps = ({ myAccountReducer: { accountMenu } }) => ({ accountMenu });

export default connect(mapStateToProps, {})(MyAccountActions);
