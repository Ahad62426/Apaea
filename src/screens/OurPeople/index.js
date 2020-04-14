//references Region
import React, { Component } from 'react';
import { View, ActivityIndicator, Image, Linking } from 'react-native';
import { Container, Content, Label, Text } from 'native-base';
import HTML from 'react-native-render-html';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';

import CommonStyles, {
    DynamicP,
    DynamicFntW,
    DynamicFntSize,
    DynamicM,
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
        const { loading, dataKey, data, navigation } = this.props;
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
                    Screen={navigation.state.params.title}
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
                        
                        {dataArray ? dataArray.length ? 
                            dataArray.map(people =>
                                <View>
                                    {people.image && people.image.includes('.') ?
                                        <View style={[{ flex: 1, }, CommonStyles.hc, DynamicM(15, 0, 0, 0)]}>
                                            <Image style={{ width: 180, height: 180, resizeMode: "contain", resizeMethod: "resize", borderRadius: 100 }} source={{ uri: `${BASE_URL}/dev/${people.image}`, cache: "force-cache" }} ></Image>
                                        </View>
                                        : null }
                                    <Label
                                        style={[DynamicP(10, 10, 0, 0), CommonStyles.textCenter, {
                                            fontSize: 18,
                                        }]}>
                                        {people.name}
                                    </Label>
                                    {people.description ?
                                        <HTML
                                            onLinkPress={({}, href) => { Linking.openURL(href); } }
                                            html={
                                                people.description
                                                .replace(/\s+/g,' ')
                                                .replace(/&nbsp;/g, ' ')
                                                .replace(/  +/g, ' ')
                                                .replace(/style=\"font-size:11.0pt;line-height:107%;font-family:\"/g, '')
                                                .replace(/style=\"font-family:&quot;Calibri&quot;,sans-serif\"/g, '')
                                                .replace(/mso-fareast-font-family:\r\n&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;/g, '')
                                                .replace(/font-family:\" times=\"\" new=\"\" roman\",serif\"=\"\"/g, '')
                                                .replace(/\n/g, '')
                                                .replace(/font-family:;/g, '')
                                                .replace(/,sans-serif;/g, '')
                                                .replace(/,serif;/g, '')} />
                                            : null }
                                </View>)
                            
                            : <View style={[CommonStyles.hc, DynamicM(20, 0, 0, 0)]}>
                                <Text style={[DynamicFntW("700"), DynamicFntSize(15)]}>No Data available For {navigation.state.params.title}.</Text>
                                <Text style={[CommonStyles.txtColorSub, DynamicFntSize(12)]}>Sorry for the inconvenience</Text>
                            </View> 
                            : <View style={[CommonStyles.hc, DynamicM(20, 0, 0, 0)]}>
                                <Text style={[DynamicFntW("700"), DynamicFntSize(15)]}>Unable to fetch data</Text>
                            </View>
                        }

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
