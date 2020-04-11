//references Region
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Textarea,
} from 'native-base';
import { TColors, DynamicWidth, DynamicFntSize } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { LoadingButton } from '../../components/Utilities';

import CommonStyles, { DynamicP, DynamicM } from '../../components/Styles';
import { customisedAction } from '../../redux/actions';
import { SIGN_UP } from '../../constants'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'usamaali',
            lastName: 'shah',
            email: 'check@gmail.com',
            password: 'password',
            memtype: '',
            address: 'Karachi',
            title: 'Research',
            website: 'http://technexpaksolution.com/',
            city: 'Karachi',
            state: 'Pakistan',
            zipcode: '610000',
            phone: '03133245587',
            insitute: 'Mehran',
        };
    }
    
    componentDidMount() {
        const { memtype } = this.props.navigation.state.params;
        this.setState({ memtype });
    }


    submit = () => {
      const { firstName, lastName, email, password, memtype, address, title, website, city, state, zipcode, phone, insitute } = this.state;
      this.props.customisedAction(SIGN_UP, {
        name: firstName+' '+lastName,
        email,
        role: 'member',
        password,
        memtype,
        address,
        title,
        website,
        city,
        state,
        zipcode,
        phone,
        insitute
      });
    }

    _takeMeTOWelcome = () => {
        this.props.navigation.navigate('Welcome');
    };

    render() {
        const { firstName, lastName, email, password, address, title, website, city, state, zipcode, phone, insitute } = this.state;
        const { loading } = this.props.signUpReducer;
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
                    Screen={'Membership Type'}
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
                    ]}
                >

                    <Form style={[DynamicM(0, 10, 0, 0), DynamicP(10, 5, 5, 5)]}>
                     
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="First Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={firstName}
                                onChangeText={value => this.setState({ firstName: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Last Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={lastName}
                                onChangeText={value => this.setState({ lastName: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Title" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={title}
                                onChangeText={value => this.setState({ title: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Institute" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={insitute}
                                onChangeText={value => this.setState({ insitute: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Website" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={website}
                                onChangeText={value => this.setState({ website: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Textarea style={[CommonStyles.inputRadius, DynamicP(10, 10, 10, 10), DynamicWidth("100%")
                                , { alignSelf: "flex-start" }]} rowSpan={4} bordered placeholder="Address"
                                value={address}
                                onChangeText={value => this.setState({ address: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="City" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={city}
                                onChangeText={value => this.setState({ city: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="State" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={state}
                                onChangeText={value => this.setState({ state: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Zip" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={zipcode}
                                onChangeText={value => this.setState({ zipcode: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder="Phone Number" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={phone}
                                onChangeText={value => this.setState({ phone: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input style={[
                                CommonStyles.inputRadius,
                                DynamicP(10, 10, 10, 10),
                                DynamicWidth("100%"),
                                CommonStyles.inputBgColor,
                                DynamicFntSize(15)
                            ]}
                            placeholder="Email Address"
                            value={email}
                            onChangeText={value => this.setState({ email: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(5, 5, 0, 0)]}  >
                           
                            <Input style={[
                                CommonStyles.inputRadius,
                                DynamicP(10, 10, 10, 10),
                                DynamicWidth("100%"),
                                CommonStyles.inputBgColor,
                                DynamicFntSize(15)
                            ]} 
                            value={password}
                            onChangeText={value => this.setState({ password: value })}
                            placeholder="Password"/>
                        </Item>
                        <LoadingButton
                            isBlock={true}
                            submitting={loading}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={'SignUp'}
                            style={[DynamicM(25, 5, 0, 0), {
                                lignSelf: "center",
                                backgroundColor: TColors.bgSecondary,
                                
                            }]}
                            callback={() => this.submit()}
                        />
                    </Form>

                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ signUpReducer }) => ({ signUpReducer });

export default connect( mapStateToProps, { customisedAction })(Registration);
