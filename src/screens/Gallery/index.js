//references Region
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text, Image, Modal, TouchableNativeFeedback } from 'react-native';
import { Container, Title, Icon, Button } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import ImageViewer from 'react-native-image-zoom-viewer';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { customisedAction } from '../../redux/actions';
import { GET_BOARDING_IMAGES, BASE_URL } from '../../constants';

import CommonStyles, { DynamicM } from '../../components/Styles';

const textArray = ['Universitas Airlangga', 'Home Page Slider']

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImages: false,
            imagesList: []
        }
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
                onPress={() => this.showImages(item.subData)}>
                <Image style={{ height: 160, width: 200, resizeMode: "cover", borderRadius: 10 }} 
                    source={{ uri: `${BASE_URL}/dev/${item.subData[0].path}`, cache: "force-cache" }} />
                <Text style={{ marginTop: 10 }}>{textArray[index]}</Text>
            </TouchableOpacity>
        );
    }

    showImages(data) {
        const imagesList = data.map(image => { return { url: `${BASE_URL}/dev/${image.path}` }})
        this.setState({ showImages: true, imagesList })
    }

    render() {
        const { loadingImages, galleryImages, customisedAction } = this.props;
        const { showImages, imagesList } = this.state;
        return (
            <Container
                style={{
                    backgroundColor: '#E2E9F5',
                }}>
                <NavigationEvents onDidFocus={() => {
                    if (!loadingImages && !galleryImages) customisedAction(GET_BOARDING_IMAGES);
                }} />
                <Modal visible={showImages}
                    transparent={true}>
                    <ImageViewer imageUrls={imagesList}
                        enableSwipeDown={true}
                        onSwipeDown={() => this.setState({ showImages: false })}
                        enablePreload={true} />
                </Modal>
                <CstHeader
                    isMenuRight={true}
                    isProfile={true}
                    OpenMenu={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    Screen={'Gallery'}
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
                        :   <View style={{ flex: 1, justifyContent: "center" }}><Title style={{ fontSize: 14, color: TColors.bgSecondary }}>Images Not Available!</Title></View> 
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
