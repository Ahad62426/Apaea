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
    Text,
    Label,
    Accordion,
} from 'native-base';
import SideBar from '../Sidebar';
import { TColors, DynamicFntSize } from '../../components/Styles';
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
        title: 'Publication Ethics and Malpractice Statement',
        author: 'Dinh Phan',
    },
    {
        title: 'The 4th Applied Financial Modelling Conference_Melbourne_2018',
        author: 'Dinh Phan',
    },
    {
        title: 'The 8th RMUTP Conference Proceedings_Bangkok_2017',
        author: 'Dinh Phan',
    },
    {
        title: 'The 3rd Applied Financial Modelling Conference_Kampar_2017',
        author: 'Dinh Phan',
    },


];
//endregion

class Publications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
            hasData: true
            ,
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
                    Screen={'Conference Proceeding'}
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

                    {this.state.hasData
                        ?
                        <FlatList
                            data={this.props.productsListData}
                            keyExtractor={(item, index) => `${item.id}`}
                            renderItem={({ item }) => CCard(Object.assign(item, { type: "blogPostCard" }))}
                            style={{ marginVertical: 8 }}

                        >
                        </FlatList>
                        :
                        <View style={[CommonStyles.hc, DynamicM(20, 0, 0, 0)]}>
                            <Text style={[DynamicFntW("700"), DynamicFntSize(15)]}>No Journal Posted yet.</Text>
                            <Text style={[CommonStyles.txtColorSub, DynamicFntSize(12)]}>Sorry for the inconvenience</Text>

                        </View>
                    }


                </View>
            </Container >
        );
    }
}
Publications.defaultProps = {
    productsListData: dataArray
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
