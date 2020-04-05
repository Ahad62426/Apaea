//region References
import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Image } from 'react-native';
import { Header, Icon, Left, Body, Right, Title, Button, Subtitle, } from 'native-base';
import { connect } from 'react-redux';
import CommonStyles, {
    TColors
} from '../../components/Styles';
import Menu from '../../assets/Icons/menuSVG';
import { CLogo } from '../../components/Utilities'

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

    _getMenuBtn() {
        if (this.props.isMenu) {

            return (
                <Button transparent style={CommonStyles.backbtn}
                    onPress={this.props.OpenMenu}
                    background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    {/* <Icon name='menu' /> */}
                    <Menu size={18} color={'#A6BCD0'} color1={'white'} />
                </Button>

            )

        }
    }


    _getBackBtn() {
        if (this.props.isBack) {
            return (
                <Button transparent style={CommonStyles.backbtn} onPress={this.props.GoBack} background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    <Icon type="FontAwesome" name='angle-left' style={{ fontSize: 20, fontWeight: 'bold' }} />
                </Button>

            )
        }
    }

    _getPowerOffBtn() {
        if (this.props.isLogout) {
            return (
                <Button transparent style={CommonStyles.backbtn} onPress={this.props.Logout} background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    <Icon type="FontAwesome" name='power-off' style={{ fontSize: 16 }} />
                </Button>
            )
        }
    }
    _getProfileIcon() {
        if (this.props.isProfile) {
            return (
                <Button transparent style={[CommonStyles.backbtn]} onPress={this.props.GoProfile} background={TouchableNativeFeedback.Ripple('rgba(0, 112, 210, 0.8)', true)}>
                    <Image style={{ height: 25, width: 25, resizeMode: "contain", alignSelf: "center" }} source={require('../../assets/Icons/account.png')}></Image>
                </Button>
            )
        }
    }

    render() {
        var cstmStyles = this.props.customStyle == undefined ? {} : this.props.customStyle;
        const bgColor = "#3E83FF";
        return (
            <Header style={[{ zIndex: 10, backgroundColor: TColors.bgColorPrimary }, cstmStyles]}>
                <Left style={{ flex: 2 }}>
                    {this._getMenuBtnRight()}
                </Left>
                <Body style={[{ flex: 8, justifyContent: 'flex-start', alignItems: 'center' }]}>
                    <View style>
                    </View>
                    <Title>{this.props.Screen}</Title>

                </Body>
                <Right style={[{ flex: 2 }]}>
                    {/* {this._getPowerOffBtn()} */}
                    {this._getProfileIcon()}
                </Right>
            </Header>
        );
    }
}

const mapStateToProps = state => ({

});


const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(MasterHeader);