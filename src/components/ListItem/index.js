import React from 'react';
import {
  List,
  ListItem,
  Left,
  Button,
  Right,
  Image,
  Thumbnail,
  Text,
  View,
} from 'native-base';
import { DynamicM, DynamicP } from '../Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Cart from '../../assets/Icons/cartSVG';


const CListItem = props => {
  
  return (
    <ListItem
      key={props.data.CategoryID}
      onPress={props.callback}
      avatar
      style={[
        DynamicM(10, 0, 10, 10),
        DynamicP(10, 10, 10, 10),
        { backgroundColor: 'white' },
      ]}>

      {props.isImage !== false ? <Thumbnail
        square
        size={80}
        source={{
          uri: props.data.Icon,
        }}
      /> : null}

      <View style={[{ flex: 1 }, DynamicM(0, 0, 0, 10)]}>
        <Text style={{ flex: 1 }}>{props.data.Name}</Text>
        <Text note style={{ flex: 1 }}>
          {props.data.Details}
        </Text>
      </View>
      <Icon name="right" size={15} color="black" />
    </ListItem>
  );
};

const CProductListItem = props => {
  
  return (
    <ListItem
      key={props.data.CategoryID}
      onPress={props.callback}
      avatar
      style={[
        DynamicM(10, 0, 10, 10),
        DynamicP(10, 10, 10, 10),
        { backgroundColor: 'white' },
      ]}>
      <Thumbnail
        square
        size={80}
        source={{
          uri: props.data.ImageURL_Thumb,
        }}
      />
      <View style={[{ flex: 1 }, DynamicM(0, 0, 0, 10)]}>
        <Text style={{ flex: 1 }} numberOfLines={2}>
          {props.data.Name}
        </Text>
        <Text note style={{ flex: 1 }}>
          {props.data.SubCategoryName}
        </Text>
        <View style={[DynamicP(0, 0, 10, 10), { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
          <Button transparent>
            <Cart size={20} color={'#377CE1'} />
          </Button>
          <Text style={{ color: '#2e2e2e', fontWeight: '700' }}>
            £{props.data.SellingPrice}
          </Text>
          <Button transparent>
            <Icon name="hearto" size={20} color="#ed5565" />
          </Button>
        </View>
      </View>
    </ListItem>
  );
};
export { CListItem, CProductListItem };
