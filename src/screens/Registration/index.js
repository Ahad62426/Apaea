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
import I18n from '../../i18n';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            title: '',
            website: '',
            city: '',
            state: '',
            zipcode: '',
            phone: '',
            insitute: '',
        };
    }

    submit = () => {
      const { firstName, lastName, email, password, address, title, website, city, state, zipcode, phone, insitute } = this.state;
      const { memtype } = this.props.navigation.state.params;
      if (!firstName && !lastName) return Alert.alert(I18n.t('name_alert'));
      if (!email) return Alert.alert(I18n.t('email_alert'));
      if (!password) return Alert.alert(I18n.t('password_alert'));
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
                    Screen={I18n.t('membership_type')}
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
                            <Input placeholder={I18n.t('first_name')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={firstName}
                                onChangeText={value => this.setState({ firstName: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('last_name')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={lastName}
                                onChangeText={value => this.setState({ lastName: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('title')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={title}
                                onChangeText={value => this.setState({ title: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('institute')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={insitute}
                                onChangeText={value => this.setState({ insitute: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('website')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={website}
                                onChangeText={value => this.setState({ website: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Textarea style={[CommonStyles.inputRadius, DynamicP(10, 10, 10, 10), DynamicWidth("100%")
                                , { alignSelf: "flex-start" }]} rowSpan={4} bordered placeholder={I18n.t('address')}
                                value={address}
                                onChangeText={value => this.setState({ address: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('city')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={city}
                                onChangeText={value => this.setState({ city: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('state')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={state}
                                onChangeText={value => this.setState({ state: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('zip')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={zipcode}
                                onChangeText={value => this.setState({ zipcode: value })}
                            />
                        </Item>
                        <Item stackedLabel style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                            <Input placeholder={I18n.t('phone_number')} style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                value={phone}
                                keyboardType="numeric"
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
                            placeholder={I18n.t('email')}
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
                            secureTextEntry={true}
                            value={password}
                            onChangeText={value => this.setState({ password: value })}
                            placeholder={I18n.t('Password')}/>
                        </Item>
                        <LoadingButton
                            isBlock={true}
                            submitting={loading}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={I18n.t('signup')}
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
