//references Region
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert, Modal, ActivityIndicator } from 'react-native';
import { Container, Form, Item, Content, Input, Textarea, Title } from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import { TColors, DynamicWidth } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import { LoadingButton } from '../../components/Utilities';

import CommonStyles, { DynamicP, DynamicM, DynamicFntSize } from '../../components/Styles';
import { customisedAction } from '../../redux/actions';
import { SUBMIT_DATA } from '../../constants';
//endregion

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            subject: null,
            message: null,
            title: null,
            author: null,
            affiliation: null,
            presenter: null,
            abstract: null,
            keyword: null,
            file: null,
            fileNmae: null,
            file_extension: null,
            pages: null,
            encoding: false
        };
    }

    UNSAFE_componentWillReceiveProps() {
        if (!this.props.loading) {
            this.setState({
                name: null,
                email: null,
                subject: null,
                message: null,
                title: null,
                author: null,
                affiliation: null,
                presenter: null,
                abstract: null,
                keyword: null,
                file: null,
                fileNmae: null,
                pages: null,
                encoding: false
            });
        }
    }

    _submitForm = () => {
        const { name, email, subject, message, title, author, affiliation, presenter, abstract, keyword, file, file_extension, pages } = this.state;
        const { user, navigation, customisedAction } = this.props;
        let data = {}
        if (navigation.state.params.dataKey !== "constact-us-form") {
            if (!title) return Alert.alert("Title is required");
            if (!author) return Alert.alert("Author is required");
            if (!presenter) return Alert.alert("Presenter is required");
            data = {
                title,
                author,
                affiliation,
                presenter,
                abstract,
                keyword,
                file,
                file_extension,
                pages,
                user_id: user.id,
                dataKey: navigation.state.params.dataKey
            }
        } else {
            if (!name) return Alert.alert("Name is required");
            if (!email) return Alert.alert("Email is required");
            if (!subject) return Alert.alert("Subject is required");
            if (!message) return Alert.alert("Message is required");
            data = {
                name,
                email,
                subject,
                message,
                dataKey: navigation.state.params.dataKey
            }
        }
        customisedAction(SUBMIT_DATA, data);
    }

    async _selectFile() {
        try {
            const file = await DocumentPicker.pick({
                type: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/txt", "text/plain"]
            });

            if (file) {
                this.setState({ encoding: true })
                const file_extension = file.name.slice(file.name.lastIndexOf("."));
                RNFetchBlob.fs.readFile(file.uri, "base64")
                .then(result => {
                    this.setState({ file: result, fileNmae: file.name, file_extension, encoding: false })
                })
                .catch(() => 
                    this.setState({ encoding: false }));
            }
        } catch (err) {
            this.setState({ encoding: false });
        }
    }

    render() {
        const { name, email, subject, message, title, author, affiliation, presenter, abstract, keyword, fileNmae, pages, encoding } = this.state;
        const { dataKey } = this.props.navigation.state.params;
        const { loading } = this.props;
        return (
            <Container
                style={{
                    backgroundColor: '#E2E9F5',
                }}>
                <Modal
                    transparent={true}
                    visible={encoding}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator size="large" color={TColors.bgSecondary} />
                        </View>
                </Modal>
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

                    <Form style={[DynamicM(0, 10, 0, 0), DynamicP(10, 5, 5, 5)]}>
                        {dataKey === "constact-us-form" ?
                            <View>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Name" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={name}
                                        onChangeText={value => this.setState({ name: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Email Address" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={email}
                                        onChangeText={value => this.setState({ email: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Subject" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={subject}
                                        onChangeText={value => this.setState({ subject: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Textarea
                                        placeholder="Message"
                                        style={[CommonStyles.inputRadius, DynamicP(10, 10, 10, 10), DynamicWidth("100%")
                                            , { alignSelf: "flex-start" }]} rowSpan={4} bordered
                                        value={message}
                                        onChangeText={value => this.setState({ message: value })}
                                    />
                                </Item>
                            </View>
                        :   <View>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Title" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={title}
                                        onChangeText={value => this.setState({ title: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Main Author" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={author}
                                        onChangeText={value => this.setState({ author: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Affiliation" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={affiliation}
                                        onChangeText={value => this.setState({ affiliation: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Presenter" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={presenter}
                                        onChangeText={value => this.setState({ presenter: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Textarea
                                        placeholder="Abstract"
                                        style={[CommonStyles.inputRadius, DynamicP(10, 10, 10, 10), DynamicWidth("100%")
                                            , { alignSelf: "flex-start" }]} rowSpan={4} bordered
                                        value={abstract}
                                        onChangeText={value => this.setState({ abstract: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Keyword(s)" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={keyword}
                                        onChangeText={value => this.setState({ keyword: value })}
                                    />
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <TouchableOpacity
                                        style={[CommonStyles.inputRadius, DynamicP(15, 15, 10, 10), DynamicWidth("100%")]}
                                        onPress={() => this._selectFile()}
                                    >
                                        <Text style={[DynamicFntSize(15), { color: 'rgba(0, 0, 0, 0.7)'} ]}>
                                            {fileNmae || 'Choose file'}
                                        </Text>
                                    </TouchableOpacity>
                                </Item>
                                <Item style={[CommonStyles.noBorder, DynamicM(10, 5, 0, 0)]}  >
                                    <Input placeholder="Total No of Pages" style={[CommonStyles.inputRadius, DynamicFntSize(15), DynamicP(10, 10, 10, 10), DynamicWidth("100%")]}
                                        value={pages}
                                        keyboardType="numeric"
                                        onChangeText={value => this.setState({ pages: value })}
                                    />
                                </Item>
                            </View>
                        }
                        <LoadingButton
                            isBlock={true}
                            submitting={loading}
                            submittingText={dataKey === "constact-us-form" ? "Sending" : "Submitting"}
                            rounded={true}
                            loaderColor={'white'}
                            textColor="white"
                            btnText={dataKey === "constact-us-form" ? "Send message" : "Submit Paper"}
                            style={[DynamicM(25, 5, 0, 0), {
                                width: "90%", alignSelf: "center",
                                backgroundColor: TColors.bgSecondary,
                            }]}
                            callback={() => this._submitForm()}
                        />
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ sessionReducer: { user }, dataSubmissionReducer: { loading } }) => ({ 
  user, loading
});

export default connect(mapStateToProps, { customisedAction })(ContactUs);
