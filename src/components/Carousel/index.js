import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { View, Dimensions, Text, Platform } from 'react-native';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import { DynamicFntSize, DynamicM, TColors } from '../Styles';
import { BASE_URL } from '../../constants';

const BannerWidth = Dimensions.get('window').width;

const CCarousel = props => {
  if (props.type == "image-slider") {
    return (
      <Carousel
        autoplay
        autoplayTimeout={2000}
        loop
        index={0}
        pageIndicatorStyle={{ backgroundColor: '#3C5F8C' }}
        activePageIndicatorStyle={{ backgroundColor: 'white', width: 8, height: 8 }}
        pageSize={BannerWidth}>
        {props.list.map((item, index) => (
          <View style={[{ flex: 1 }]}>
            <View style={{ flex: 8, borderRadius: 10, alignItems: "center", }}>
              <Image 
                indicator={Progress.Pie}
                indicatorProps={{
                  borderWidth: 0,
                  color: TColors.bgColorPrimary,
                  unfilledColor: TColors.lightGray,
                }}
                resizeMethod="resize"
                key={item.path}
                style={[{ width: "100%", height: props.user ? Platform.OS === "ios" ? "80%" : "84%" : "100%", resizeMode: "cover" }]}
                source={{ uri: `${BASE_URL}/dev/${item.path}`, cache: "force-cache" }} />
            </View>
          </View>
        ))}
      </Carousel>
    );
  } else if (props.type == "text-slider") {
    return (
      <Carousel
        index={0}
        autoplay={false}
        pageIndicatorStyle={{ backgroundColor: '#3C5F8C', }}
        pageIndicatorContainerStyle={{ position: "absolute", top: 0, right: 10 }}
        activePageIndicatorStyle={{ backgroundColor: 'white', width: 8, height: 8 }}
        showsPageIndicator={false}
        pageSize={BannerWidth}>
        {props.list.map((item, index) => (
          <View style={[{ flex: 1, width: "90%", alignSelf: "center" }]}>
            <Text style={[{ color: "white" }, DynamicFntSize(props.user ? 18 : 16)]}>{item.title}</Text>
            <View style={[{ width: "100%", borderBottomColor: "white", borderBottomWidth: 1 }, DynamicM(10, 10, 0, 0)]}></View>
            <Text style={[{ color: "white" }, DynamicFntSize(props.user ? 14 : 10)]}>{item.description.replace(/&nbsp;/g, ' ').replace(/  +/g, ' ').trim()}</Text>
          </View>
        ))}
      </Carousel>
    );
  }
};

export { CCarousel };
