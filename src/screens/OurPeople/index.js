//references Region
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
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
    Image,
    Label,
    Text,
} from 'native-base';
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
                    Screen={'President'}
                />
                <View style={{ height: 0 }}>
                    <View
                        style={{
                            height: 200,
                            backgroundColor: TColors.bgColorPrimary,
                        }}></View>
                </View>
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
                    <View style={[{ flex: 1, }, CommonStyles.hc, DynamicM(15, 0, 0, 0)]}>

                        {RenderOurPeopleDP("president")}
                    </View>
                    <Label
                        style={[DynamicP(10, 10, 0, 0), CommonStyles.textCenter, {
                            fontSize: 18,
                        }]}>
                        {Peoples.getPresidentInfo.name}
                    </Label>




                    <Text style={{ fontSize: 13, lineHeight: 20 }}>
                        PhD (Economics and Econometrics, Monash University),
                    </Text>

                    <Text style={{ fontSize: 13, lineHeight: 20 }}>
                        Alfred Deakin Professor,
                    </Text>

                    <Text style={{ fontSize: 13, lineHeight: 20 }}>
                        Deakin University,
                    </Text>


                    <Text style={{ fontSize: 13, lineHeight: 20 }}>
                        Email: narayan@deakin.edu.au
                    </Text>

                    <Text style={[{ fontSize: 13, lineHeight: 20 }, DynamicM(20, 0, 0, 0)]}>
                        Paresh Kumar Narayan is an Alfred Deakin Professor at the Deakin Business School. He is the Director of the Centre for Financial Econometrics at Deakin University. Professor Narayan is a co-Editor-in-Chief of Economic Modelling, Associate Editor of Finance Research Letters and Studies in Economics & Finance, Subject Editor of Journal of International Financial Markets Institutions and Money, and has Guest Edited the Journal of Banking & Finance and Energy Economics.
                    </Text>
                    <Text style={[{ fontSize: 13, lineHeight: 20 }, DynamicM(20, 0, 0, 0)]}>
                        Professor Narayan has published extensively in financial economics, financial econometrics and applied finance, covering topics such as forecasting, trading strategies, and the performance of financial markets. He has published around 300 papers in international refereed journals with over 75% of his papers appearing in social science citation impact factor journals. Based on the Australia Business Deans Council (ABDC) journal rankings, Professor Narayan has published 30 papers in A-star journals and over 120 papers in A-ranked impact factor journals. He is ranked amongst the top-1% of the authors in Australia and amongst the top-15 Young Economists in the World by Research Papers in Economics (www.repec.com). Google Scholar counts the citation of Professor Narayan's work at over 13,000 citations, with an h-index=57, and an i10 index=202. In 2014, Professor Narayan received the Scopus Young Researcher award for the best 3 authors in Australia in the Social Science category under the age of 40. In 2015, Professor Narayan was awarded the Mahatma Gandhi Pravasi Samman Award for non-resident Indians who have made substantial contributions to the profession, including contributions to public policy. And, in 2015 he also received the Gold Medal and Citation by the Indian Econometric Society-a medal awarded to someone from around the world who is under the age of 45 and has made a substantial contribution to quantitative economics. In 2016 he won the Malaysian Government's medal and prize for the most innovative idea in Islamic finance research. Professor Narayan has been invited to several conferences and forums as a keynote speaker/invited speaker. In the last two years he has given 10 keynote speeches. Several of his recent keynote speeches have been on Islamic finance research.
    
                    </Text>

                </Content>
            </Container >
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OurPeople);
