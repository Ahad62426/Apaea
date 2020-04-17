import React from 'react';
import { Image, View, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  Separator
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-simple-toast';

import { ActionButton } from '../Utilities';
import store from '../../redux/store';
import CommonStyles, { DynamicM, DynamicP, TColors, DynamicFntW, DynamicFntSize } from '../Styles';
import { BASE_URL } from '../../constants/Apis';
import { DISPLAY_DATA_SCREEN } from '../../constants';

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
        'message': 'This aap needs access to your storage to download.'
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
      
      if (await RNFetchBlob.fs.exists(options.path)) Toast.show("File already exists", Toast.LONG);
      else {
        try {
          config(options)
          .fetch('GET', url)
          .progress({ interval: 10 },(received,total)=>{
              Toast.show(`Downloading ${((received/total)*100).toFixed(2)}%`, Toast.LONG);
          })
          .then(res => {
            Toast.show(`File ${url.slice(url.lastIndexOf("/")+1)} download completed!`, Toast.LONG);
          })
        } catch (error) {
          console.log('error', error)
        }
      }
    }
    else Alert.alert("Storage Permission Not Granted");
  } catch (err) {
    console.warn(err)
  }
}

renderCardBody = props => {
  switch (props.type) {
    case "actionCard":
      return (
        <Body>
          {CactionCardItemHeading("Title :")}
          {CactionCardItemtext(props.title)}

          {props.mauthor ? CactionCardItemHeading("Main Author :") : null}
          {props.mauthor ? CactionCardItemtext(props.mauthor) : null}

          {props.sub_type && !props.mauthor ? CactionCardItemHeading("Sub-Type :") : null}
          {props.sub_type && !props.mauthor ? CactionCardItemtext(props.sub_type) : null}

          {props.affilliation && !props.mauthor ? CactionCardItemHeading("Affilliation :") : null}
          {props.affilliation && !props.mauthor ? CactionCardItemtext(props.affilliation) : null}

          {props.email && !props.mauthor ? CactionCardItemHeading("Email :") : null}
          {props.email && !props.mauthor ? CactionCardItemtext(props.email) : null}

          {props.presenter && !props.mauthor ? CactionCardItemHeading("Presenter :") : null}
          {props.presenter && !props.mauthor ? CactionCardItemtext(props.presenter) : null}

          {props.preaffiliation && !props.mauthor ? CactionCardItemHeading("P-Affiliation:") : null}
          {props.preaffiliation && !props.mauthor ? CactionCardItemtext(props.preaffiliation) : null}

          {props.pre_email && !props.mauthor ? CactionCardItemHeading("P-Email :") : null}
          {props.pre_email && !props.mauthor ? CactionCardItemtext(props.pre_email) : null}

          {props.keyword && !props.mauthor ? CactionCardItemHeading("Keyword :") : null}
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
                  header: "Abstract", description: props.abstract
                }})
              }>
              {CactionCardItemHeading("Abstract :")}
                <Icon name="right" size={15} color="black" />
            </TouchableOpacity>
            : null
          }
          {props.file && props.file.includes('.') ?
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <ActionButton
                textColor={"white"}
                btnText={"Download"}
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
          {this.CTwoColText("Manager:", props.name, "Price:", `USD ${props.price || ''}`)}
          {this.CTwoColText("Accomodation:", `USD ${props.accomodation || ''}`, "Food:", `USD ${props.food || ''}`)}
          {this.CTwoColText("Transportation:", `USD ${props.transportation || ''}`, "Discount:", `${props.discount || ''}%`)}
          {this.CTwoColText("Total:", `USD ${props.total || ''}`)}
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <ActionButton
              textColor={"white"}
              btnText={"Register"}
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
                btnText={props.is_active ? "Register" : "Read More"}
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
                btnText={"Download"}
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
          <Image style={{ width: 117, height: 90, resizeMode: "contain", resizeMethod: "scale" }} source={{ uri: `${BASE_URL}/dev/${props.image}`, cache: "force-cache" }}></Image>
        </Body>
      )
      break;
    default:
      <Text>Card Type Not selected </Text>
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

const CBreadCrumb = props => {
  return (
    <Separator
      style={[
        {
          flexDirection: 'row',
          padding: 10,
          height: 'auto',
          borderBottomColor: '#c5c5c5',
          borderBottomWidth: 1,
          justifyContent: 'center',
        },
        props.style !== undefined ? props.style : {},
      ]}>
      {props.left !== false ? (
        <CardItem
          style={[DynamicM(0, 0, 0, 0), DynamicP(0, 0, 0, 0), { flex: 2 }]}>
          <Left>
            <Body style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text
                style={[CommonStyles.cardTitle, CommonStyles.uppercase]}
                numberOfLines={1}>
                {props.text}
              </Text>
            </Body>
          </Left>
          {props.right !== false ? (
            <Right>
              <Button transparent>
                <Text>View All</Text>
                <Icon name="right" size={15} color="black" />
              </Button>
            </Right>
          ) : null}
        </CardItem>
      ) : (
          <Text
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              fontWeight: '700',
              color: props.color,
            }}
            numberOfLines={1}>
            {props.text}
          </Text>
        )}
    </Separator>
  );
};
//Product card
const CPCard = props => {

  return (
    <>
      <CardItem
        cardBody
        style={[
          CommonStyles.vhc,
          props.Imagestyle != undefined ? props.Imagestyle : {},
          { paddingTop: 40 },
        ]}>
        <Image
          resizeMode={'contain'}
          source={{
            uri: props.item.ImageURL_Thumb,
          }}
          style={{ height: 150, width: 150 }}
        />
      </CardItem>

      <CardItem>
        <Left>
          <Body>
            <Text style={{ color: '#2e2e2e', fontWeight: '700' }}>
              {props.item.Name}
            </Text>
            <Text>
              <Text style={{ color: '#2e2e2e', fontWeight: '700' }}>
                £{props.item.DiscountPrice}
              </Text>
              <Text
                style={[
                  {
                    color: 'red',
                    fontWeight: '700',
                    textDecorationColor: 'blue',
                    textDecorationLine: 'line-through',
                    paddingLeft: 10
                  },
                  DynamicP(0, 0, 0, 20),
                ]}>
                £{props.item.SellingPrice}
              </Text>
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Cart size={25} color={'#377CE1'} />
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="hearto" size={20} color="#ed5565" />
          </Button>
        </Right>
      </CardItem>
    </>
  );
};

// const CBreadCrumb = props => {

//   return (
//     <Card style={{}}>
//       <CardItem
//         style={[{
//           justifyContent: 'center',
//           alignItems: 'center',
//         },props.style != undefined ? props.style :{}]}>
//         <Text
//           style={{fontSize: 18,textTransform:'uppercase', fontWeight: '700', color: props.color}}
//           numberOfLines={1}>
//           {props.text}
//         </Text>
//       </CardItem>
//     </Card>
//   );
// };

export { CCard, CBreadCrumb, CPCard, CPartnerCard };
