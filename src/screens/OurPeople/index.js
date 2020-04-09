//references Region
import React, { Component } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
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
import HTML from 'react-native-render-html';
import SideBar from '../Sidebar';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import ChatIcon from '../../assets/Icons/chatSVG';
import { LoadingButton, RenderOurPeopleDP } from '../../components/Utilities';
import IonIcons from 'react-native-vector-icons/Entypo';
import Peoples from '../../i18n/en/en.ourPeople';

import CommonStyles, {
    DynamicP,
    DynamicFntW,
    DynamicM,
    DynamicBgColor,
    DynamicHeight,
    DynamicBDRadius,
    DynamicBorderPosition,
} from '../../components/Styles';
import { BASE_URL } from '../../constants';

const TabsSize = CommonStyles.fullWidth > 480 ? 100 : 50;

//endregion


class OurPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
        };
    }


    render() {
        const { loading, dataKey, data } = this.props;
        const dataArray = data[dataKey];
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
                    Screen={this.props.navigation.state.params.title}
                />
                <View style={{ height: 0 }}>
                    <View
                        style={{
                            height: 200,
                            backgroundColor: TColors.bgColorPrimary,
                        }}></View>
                </View>
                {loading ?
                    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', marginBottom: 300 }}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                    : 
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
                        
                        {dataArray && dataArray.map(people =>
                            <View>
                                {people.image && people.image.includes('.') ?
                                    <View style={[{ flex: 1, }, CommonStyles.hc, DynamicM(15, 0, 0, 0)]}>
                                        <Image style={{ width: 180, height: 180, resizeMode: "contain", resizeMethod: "resize", borderRadius: 50 }} source={{ uri: `${BASE_URL}/dev/${people.image}`, cache: "force-cache" }} ></Image>
                                    </View>
                                    : null }
                                <Label
                                    style={[DynamicP(10, 10, 0, 0), CommonStyles.textCenter, {
                                        fontSize: 18,
                                    }]}>
                                    {people.name}
                                </Label>
                                {people.description ?
                                    <HTML html={people.description.replace(/\s+/g,' ').replace(/\n/ig, '')} />
                                    : null }
                            </View>
                        )}

                    </Content>
                }
            </Container >
        );
    }
}

const mapStateToProps = ({ metaDataReducer: { loading, dataKey, data } }) => ({ 
    loading, dataKey, data
});

export default connect(mapStateToProps, {})(OurPeople);
