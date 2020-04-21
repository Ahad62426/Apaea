//region References
import React, { Component } from 'react';
import { TouchableNativeFeedback, Image, Platform } from 'react-native';
import { Header, Icon, Left, Body, Right, Title, Button } from 'native-base';
import { connect } from 'react-redux';
import CommonStyles, {
    TColors
} from '../../components/Styles';
import Menu from '../../assets/Icons/menuSVG';
import NavigationService from '../../helperMethods/navigationService';
import { removeItem } from '../../helperMethods/localstorage';
import { customisedAction } from '../../redux/actions';
import { SIGN_OUT, SET_ACCOUNT_MENU, SET_USER_SESSION } from '../../constants'

//endregion

class MasterHeader extends Component {
    constructor(props) {
        super(props);
    }

    _getMenuBtnRight() {
        if (this.props.isMenuRight) {
            return (
                <Button transparent style={CommonStyles.backbtn}
                    onPress={this.props.OpenMenu}
                    background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    <Menu size={18} color={'#A6BCD0'} color1={'white'} />
                </Button>

            )
        }
    }


    _getBackBtn() {
        if (Platform.OS == "ios" && !this.props.accountMenu && !this.props.noBackButton)
            return (
                <Button transparent style={[CommonStyles.backbtn, { marginLeft: 0, paddingRight: 5, top: -1 }]} onPress={() => NavigationService.goBack(null)} background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    <Icon name="back" type="AntDesign" style={{ color: "white" }}></Icon>
                </Button>
            )
    }

    _getPowerOffBtn() {
        if (this.props.user && !this.props.accountMenu) {
            return (
                <Button transparent style={[CommonStyles.backbtn, { top: -7, paddingLeft: 5, left: 7 }]} onPress={async () => {
                    await removeItem('@UserAuth');
                    this.props.customisedAction(SIGN_OUT);
                    NavigationService.navigate('Welcome');
                }} background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    <Icon type="FontAwesome" name='power-off' style={{ fontSize: 16 }} />
                </Button>
            )
        }
    }
    _getProfileIcon() {
        const { user, loading, accountMenu, data, upToDate } = this.props;
        if (user) {
            return (
                <Button transparent style={[CommonStyles.backbtn], { zIndex: 10, left: 7 }} onPress={() => {
                    if (!loading && !accountMenu && (!Object.keys(data).length || !upToDate)) this.props.customisedAction(SET_USER_SESSION, user)
                    this.props.customisedAction(SET_ACCOUNT_MENU, !accountMenu)
                }} background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    {!accountMenu ?
                        <Image
                            style={{ height: 25, width: 25, resizeMode: "contain", alignSelf: "center" }}
                            source={require('../../assets/Icons/account.png')} />
                        : <Icon name="closecircleo" type="AntDesign" style={{ color: "white" }}></Icon>
                    }
                </Button>
            )
        }
    }

    render() {
        var cstmStyles = !this.props.customStyle ? {} : this.props.customStyle;
        return (
            <Header style={[{ zIndex: 10, backgroundColor: TColors.bgColorPrimary }, cstmStyles]}>
                <Left style={{ flex: 2, flexDirection: "row" }}>
                    {this._getMenuBtnRight()}
                    {this._getBackBtn()}
                </Left>
                <Body style={[{ flex: 8, justifyContent: 'flex-start', alignItems: 'center' }]}>
                    <Title>{this.props.Screen}</Title>

                </Body>
                <Right style={[{ flex: 2, flexDirection: "row", marginRight: 7 }]}>
                    {this._getPowerOffBtn()}    
                    {this._getProfileIcon()}
                </Right>
            </Header>
        );
    }
}

const mapStateToProps = ({ sessionReducer: { user }, myAccountReducer: { loading, accountMenu, upToDate, data } }) => ({
    user, loading, accountMenu, upToDate, data
});

export default connect(mapStateToProps, { customisedAction })(MasterHeader);