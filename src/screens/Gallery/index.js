//references Region
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { Container, Title } from 'native-base';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import { NavigationEvents } from 'react-navigation';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { customisedAction } from '../../redux/actions';
import { GET_BOARDING_IMAGES, BASE_URL, DISPLAY_IMAGES_SCREEN } from '../../constants';

import CommonStyles, { DynamicM } from '../../components/Styles';
import I18n from '../../i18n';

const textArray = ['universitas_airlangga', 'home_page_slider']

class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    renderImages({ item, index }) {
        return (
            <TouchableOpacity
                style={{ 
                    alignItems: "center",
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 1
                }}
                onPress={() => this.props.customisedAction(DISPLAY_IMAGES_SCREEN, { title: I18n.t('images'), images: item.subData })} >
                <Image
                    indicator={Progress.Pie}
                    indicatorProps={{
                    borderWidth: 0,
                    color: TColors.bgColorPrimary,
                    unfilledColor: TColors.lightGray,
                    }}
                    borderRadius={10}
                    resizeMethod="resize"
                    key={item.path}
                    style={{ height: 160, width: 200, resizeMode: "cover" }} 
                    source={{ uri: `${BASE_URL}/dev/${item.subData[0].path}`, cache: "force-cache" }} />
                <Text style={{ marginTop: 10 }}>{I18n.t(textArray[index])}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { loadingImages, galleryImages, customisedAction, navigation } = this.props;
        return (
            <Container
                style={{
                    backgroundColor: '#E2E9F5',
                }}>
                <NavigationEvents onDidFocus={() => {
                    if (!loadingImages && !galleryImages) customisedAction(GET_BOARDING_IMAGES);
                }} />
                <CstHeader
                    isMenuRight={true}
                    isProfile={true}
                    OpenMenu={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    Screen={navigation.state.params.title}
                />
                <View style={{ height: 0 }}>
                    <View style={{ height: 200, backgroundColor: TColors.bgColorPrimary }}></View>
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
                            justifyContent: "center",
                            backgroundColor: 'white',
                            height: "100%",
                        },
                    ]}
                >

                    {loadingImages ?
                        <ActivityIndicator style={{ flex: 1, flexDirection: "column", justifyContent: "center" }} size="large" color={TColors.bgSecondary} />
                        : galleryImages ? <View style={{ top: -50, flexDirection: "column", justifyContent: "center", alignItems: "center", justifyContent: "flex-end" }}>
                                <FlatList
                                    data={galleryImages}
                                    keyExtractor={item => `${item.subData[0].id}`}
                                    renderItem={this.renderImages.bind(this)}
                                >
                                </FlatList>
                            </View>
                        :   <View style={{ flex: 1, justifyContent: "center" }}><Title style={{ fontSize: 14, color: TColors.bgSecondary }}>{I18n.t('no_images')}</Title></View> 
                    }

                </View>
            </Container >
        );
    }
}

const mapStateToProps = ({ boardingDataReducer: { loadingImages, galleryImages }}) => ({
    loadingImages, galleryImages
});

export default connect(mapStateToProps, { customisedAction })(Gallery);
