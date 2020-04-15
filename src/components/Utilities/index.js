import React from 'react';
import { TouchableOpacity, Alert, View, Image, ActivityIndicator } from 'react-native';
import { Button, Text, Item, Label, Input, Content } from 'native-base';
import CommonStyles, {
  DynamicBgColor,
  DynamicTColor,
  DynamicFntW,
  DynamicP,
  DynamicM,
  DynamicHeight,
  DynamicBorderColor,
  DynamicBDRadius,
  DynamicFntSize
} from '../Styles';
import { CGradient } from '../Gradient';



//Button
const CButton = props => (
  <Button
    rounded
    block={props.block != undefined ? true : false}
    onPress={() => props.callback()}
    style={[
      DynamicP(0, 0, 0, 0),
      DynamicHeight(props.height),
      DynamicBDRadius(props.radius),
      CommonStyles.noShadow,
      props.bdColor !== undefined ? DynamicBorderColor(props.bdColor) : null,
      props.bgColor !== undefined
        ? DynamicBgColor(props.bgColor)
        : DynamicBgColor(),
      {
        alignSelf: 'center',
      },
      props.style !== undefined ? props.style : {},
    ]}>
    <Text
      style={[
        {
          textTransform: 'capitalize',
        },
        DynamicM(0, 0, 5, 5),
        props.color !== undefined ? DynamicTColor(props.color) : null,
        DynamicFntW('600'),
      ]}>
      {props.text}
    </Text>
  </Button>
);

const GradientBtn = props => (
  <View style={{ borderRadius: 20 }}>
    <CGradient
      locations={[0, 0.5, 1]}
      end={{ x: 0.7, y: 5 }}
      start={{ x: 0.0, y: 0.15 }}
      colors={['#30C7B2', '#30C7B2', '#3AD29F']}>
      {props.children}
    </CGradient>
  </View>
);

const CHeading = props => {
  return (
    <View
      style={props.style}
    >
      <Text style={[CommonStyles.BtnTxt, { color: props.textColor }, DynamicFntSize(16)]}>
        {props.text}
      </Text>
      <View style={[{ width: props.borderWidth, borderBottomColor: "black", borderBottomWidth: 1 }, DynamicM(10, 10, 0, 0)]}></View>
    </View>
  );
};

const CLogo = props => (
  <Image style={[{ width: props.width, height: props.height, resizeMode: "contain" }]} source={require('../../assets/logo/logoPNG.png')} ></Image >
);

const CFItem = props => (
  <Item stackedLabel>
    <Label style={{ fontWeight: '700', textTransform: 'uppercase' }}>
      {props.label}
    </Label>
    <Input style={CommonStyles.textColor} disabled value={props.value} />
  </Item>
);

const LoadingButton = props => {
  return (
    <Button
      block={props.isBlock}
      rounded={props.rounded}
      style={props.style}
      onPress={!props.submitting ? props.callback : null}>
      <Text style={[CommonStyles.BtnTxt, { color: props.textColor }, props.textStyle ]}>
        {props.submitting ? props.submittingText || `Submitting` : `${props.btnText}`}
      </Text>
      {props.submitting ? (
        <ActivityIndicator size="small" color={props.loaderColor} />
      ) : null}
    </Button>
  );
};

const ActionButton = props => {
  return (
    <TouchableOpacity
      style={
        props.style
      }
      onPress={props.callback}

    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>

        {props.icon
          ?
          <View style={[{
            width: "26%", height: "100%", borderRightColor: "#49719E", borderRightWidth: 1,

          }, CommonStyles.vhc]}>
            {props.icon == "download"
              ? <Image source={require('../../assets/Icons/download.png')}></Image>
              : <Image source={require('../../assets/Icons/reply.png')}></Image>}

          </View>
          :
          null}

        <View style={{
          height: "100%",
          width: props.icon ? "74%" : "100%",
          justifyContent: "center"


        }}>
          <Text style={[{ color: props.textColor, textAlign: "center", textTransform: 'capitalize', fontSize: 15 }]}>
            {props.btnText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};




const validateEmail = val =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/.test(val);

const CAlert = props =>
  Alert.alert(props.title, props.message, props.buttons, { cancelable: false });

export {
  GradientBtn, CButton, CAlert, CLogo, validateEmail, CFItem, LoadingButton,
  ActionButton, CHeading
};
