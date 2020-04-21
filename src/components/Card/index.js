import React from 'react';
import { View, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Body
} from 'native-base';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/AntDesign';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-simple-toast';

import { ActionButton } from '../Utilities';
import store from '../../redux/store';
import CommonStyles, { DynamicM, DynamicP, TColors, DynamicFntW, DynamicFntSize } from '../Styles';
import { BASE_URL } from '../../constants/Apis';
import { DISPLAY_DATA_SCREEN } from '../../constants';
import I18n from '../../i18n';

CactionCardItemHeading = text => {
  return (
    <Text style={{ color: '#2E619A', fontWeight: '700' }}>
      {text}
    </Text>
  )
}

CactionCardItemtext = text => {
  return (
    <Text style={[{ color: '#2e2e2e' }, DynamicM(3, 10, 0, 0)]}>
      {text}
    </Text>
  )
}
CTwoColText = (firstLabel, firstText, secondLabel, secondText) => {
  return (
    <View style={[{ width: "100%", flexDirection: "row" }, DynamicM(3, 10, 0, 0)]}>
      <View style={{ flex: 5, flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={{ size: 16 }}>
          {firstLabel}
        </Text>
        <Text style={{ size: 16 }, [DynamicM(0, 0, 0, 5)]}>
          {firstText}
        </Text>
      </View>
      <View style={{ flex: 3, flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={{ size: 16 }}>
          {secondLabel}
        </Text>
        <Text style={{ size: 16 }, [DynamicM(0, 0, 0, 5)]}>
          {secondText}
        </Text>
      </View>
    </View>
  )
}
CBlogPostTitle = title => {
  return (
    <Text style={[{ color: '#2e2e2e', }, DynamicFntSize(18), DynamicFntW("700"), DynamicM(3, 10, 0, 0), DynamicP(0, 0, 10, 0)]}>
      {title}
    </Text>
  )
}

_bgdownload = async url => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Apaea',
        'message': I18n.t('download_message')
      }
    )
    
    if (granted === PermissionsAndroid.RESULTS.GRANTED || Platform.OS === "ios") {
      const { config, fs } = RNFetchBlob
      let { DownloadDir } = fs.dirs
      const options = {
        fileCache: true,
        useDownloadManager : true,
        notification : true,
        path: `${DownloadDir}${url.slice(url.lastIndexOf("/"))}`
      }
      
      if (await RNFetchBlob.fs.exists(options.path)) Toast.show(I18n.t('file_already_exists'), Toast.LONG);
      else {
        try {
          config(options)
          .fetch('GET', url)
          .progress({ interval: 10 },(received,total)=>{
              Toast.show(`${I18n.t('downloading')} ${((received/total)*100).toFixed(2)}%`, Toast.LONG);
          })
          .then(res => {
            Toast.show(`${url.slice(url.lastIndexOf("/")+1)} ${I18n.t('download_completed')}`, Toast.LONG);
          })
        } catch (error) {
          console.log('error', error)
        }
      }
    }
    else Alert.alert(I18n.t('not_granted'));
  } catch (err) {
    console.warn(err)
  }
}

renderCardBody = props => {
  switch (props.type) {
    case "actionCard":
      return (
        <Body>
          {CactionCardItemHeading(`${I18n.t('title')} :`)}
          {CactionCardItemtext(props.title)}

          {props.mauthor ? CactionCardItemHeading(`${I18n.t('Author')} :`) : null}
          {props.mauthor ? CactionCardItemtext(props.mauthor) : null}

          {props.sub_type && !props.mauthor ? CactionCardItemHeading(`${I18n.t('SubType')} :`) : null}
          {props.sub_type && !props.mauthor ? CactionCardItemtext(props.sub_type) : null}

          {props.affilliation && !props.mauthor ? CactionCardItemHeading(`${I18n.t('Affiliation')} :`) : null}
          {props.affilliation && !props.mauthor ? CactionCardItemtext(props.affilliation) : null}

          {props.email && !props.mauthor ? CactionCardItemHeading(`${I18n.t('Email')} :`) : null}
          {props.email && !props.mauthor ? CactionCardItemtext(props.email) : null}

          {props.presenter && !props.mauthor ? CactionCardItemHeading(`${I18n.t('Presenter')} :`) : null}
          {props.presenter && !props.mauthor ? CactionCardItemtext(props.presenter) : null}

          {props.preaffiliation && !props.mauthor ? CactionCardItemHeading(`${I18n.t('PAffiliation')} :`) : null}
          {props.preaffiliation && !props.mauthor ? CactionCardItemtext(props.preaffiliation) : null}

          {props.pre_email && !props.mauthor ? CactionCardItemHeading(`${I18n.t('PEmail')} :`) : null}
          {props.pre_email && !props.mauthor ? CactionCardItemtext(props.pre_email) : null}

          {props.keyword && !props.mauthor ? CactionCardItemHeading(`${I18n.t('Keywords')} :`) : null}
          {props.keyword && !props.mauthor ? CactionCardItemtext(props.keyword) : null}

          {props.abstract ?
            <TouchableOpacity
              style={[{
                flexDirection: 'row',
                paddingHorizontal: 8,
                paddingVertical: 12,
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: '#707070',
                borderWidth: .5,
                borderRadius: 8,
                width: "100%"
              }, DynamicM(3, 10, 0, 0)]}
              onPress={() => 
                store.dispatch({ type: DISPLAY_DATA_SCREEN, payload: {
                  header: I18n.t('Abstract'), description: props.abstract
                }})
              }>
              {CactionCardItemHeading(`${I18n.t('Abstract')} :`)}
                <Icon name="right" size={15} color="black" />
            </TouchableOpacity>
            : null
          }
          {props.file && props.file.includes('.') ?
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <ActionButton
                textColor={"white"}
                btnText={I18n.t('download')}
                callback={() => this._bgdownload(`${BASE_URL}/public/paper/${props.file}`)}
                icon={"download"}
                style={{
                  borderRadius: 5,
                  height: 45,
                  padding: 0,
                  width: "100%",
                  borderColor: "white",
                  color: "white",
                  backgroundColor: TColors.bgSecondary
                }}
              ></ActionButton>
            </View> : null
          }
        </Body>
      )
      break;
    case 'eventCard':
      return (
        <Body>
          {this.CBlogPostTitle(props.title)}
          {this.CTwoColText(I18n.t('Manager'), props.name, I18n.t('Price'), `${I18n.t('USD')} ${props.price || ''}`)}
          {this.CTwoColText(I18n.t('Accomodation'), `${I18n.t('USD')} ${props.accomodation || ''}`, I18n.t('Food'), `${I18n.t('USD')} ${props.food || ''}`)}
          {this.CTwoColText(I18n.t('Transportation'), `${I18n.t('USD')} ${props.transportation || ''}`, I18n.t('Discount'), `${props.discount || ''}%`)}
          {this.CTwoColText(I18n.t('Total'), `${I18n.t('USD')} ${props.total || ''}`)}
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <ActionButton
              textColor={"white"}
              btnText={I18n.t('register')}
              style={{
                borderRadius: 5,
                height: 45,
                padding: 0,
                width: "100%",
                borderColor: "white",
                color: "white",
                backgroundColor: TColors.bgSecondary
              }}
            ></ActionButton>

          </View>
        </Body>
      )
      break;
    case 'blogPostCard':
      return (
        <Body>
          {this.CBlogPostTitle(props.title || props.heading || props.name)}
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
          {/* {props.description || props.excerpt ? */}
              <ActionButton
                textColor={"white"}
                btnText={props.is_active ? I18n.t('register') : I18n.t('read_more')}
                style={{
                  borderRadius: 5,
                  height: 45,
                  padding: 10,
                  width: '48%',
                  borderColor: "white",
                  color: "white",
                  backgroundColor: TColors.bgSecondary
                }}
                callback={() => {
                  if (!props.is_active)
                  store.dispatch({ type: DISPLAY_DATA_SCREEN, payload: props })
                }}></ActionButton>
            {/* } */}
            {props.file && props.file.includes('.') ?
              <ActionButton
                textColor={"white"}
                btnText={I18n.t('download')}
                icon={"download"}
                style={{
                  borderRadius: 5,
                  height: 45,
                  padding: 10,
                  width: '48%',
                  borderColor: "white",
                  color: "white",
                  backgroundColor: TColors.bgSecondary
                }}
                callback={() => this._bgdownload(`${BASE_URL}/${props.file}`)}
              ></ActionButton> : null
            }
          </View>
        </Body>
      )
      break;
    case "partnerCard":
      return (
        <Body style={[CommonStyles.vhc]}>
          <Image
            indicator={Progress.Pie}
            indicatorProps={{
              borderWidth: 0,
              color: TColors.bgColorPrimary,
              unfilledColor: TColors.lightGray,
            }}
            resizeMethod="resize"
            key={props.image}
            style={{ width: 117, height: 90, resizeMode: "contain" }}
            source={{ uri: `${BASE_URL}/dev/${props.image}`, cache: "force-cache" }} />
        </Body>
      )
      break;
    default:
      <Text>{I18n.t('invalid_card')}</Text>
      break;
  }
}
//Button
const CCard = props => {

  return (

    <Card style={[{
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 25,
      borderColor: '#707070',
      borderWidth: 5,
      borderRadius: 8,
      backgroundColor: "transparent"

    }, CommonStyles.noShadow,]}>

      <CardItem>
        {this.renderCardBody(props)}
      </CardItem>



    </Card >
  );
};
const CPartnerCard = props => {

  return (
    <View style={[{
      flex: 1,
      height: "auto",
      margin: 5,
    }, CommonStyles.vbhc]}>
      <Card style={[{

        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 25,
        height: 130,
        borderColor: '#707070',
        borderWidth: 5,
        borderRadius: 8,
        backgroundColor: "transparent"

      }, CommonStyles.noShadow,]}>
        <CardItem>
          {this.renderCardBody(props)}
        </CardItem>
      </Card >
      <Text style={[{ height: 50, color: TColors.primaryColor }, DynamicFntSize(14), CommonStyles.textCenter]}>{props.name}</Text>
    </View >
  );
};

export { CCard, CPartnerCard };
