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
import { CPartnerCard } from '../../components/Card';
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
        id: 0,
        title: 'Fiji National University',
        img: 'partner-6',
    },
    {
        id: 1,
        title: "Xi'an University of Technology",
        img: 'partner-4',
    },
    {
        id: 2,
        title: 'Fiji National University',
        img: 'partner-6',
    },
    {
        id: 3,
        title: "Xi'an University of Technology",
        img: 'partner-4',
    },
    {
        id: 4,

        title: "Xi'an Jiaotong University",
        img: 'partner-1',
    },
    {
        id: 5,

        title: "Xi'an International Studies University",
        img: 'partner-5',
    },
    {
        id: 6,

        title: "Bank Indonesia",
        img: 'partner-2',
    },
    {
        id: 7,

        title: "Xi'an University of Technology",
        img: 'partner-3',
    },

];
//endregion

class Partners extends Component {
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
                    OpenMenu={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    Screen={'Partners'}
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
                            height: "100%",
                            flex:1,
                            backgroundColor: 'white',
                        },
                    ]}
                >

                    <FlatList
                        data={this.props.productsListData}
                        keyExtractor={(item, index) => `${item.id}`}
                        numColumns={2}
                        renderItem={({ item }) => CPartnerCard(Object.assign(item, { type: "partnerCard" }))}

                        style={{ marginVertical: 15}}
                    >
                    </FlatList>



                </View>
            </Container >
        );
    }
}
Partners.defaultProps = {
    productsListData: dataArray
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
