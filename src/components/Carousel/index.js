import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import { CCard } from '../Card';
import CommonStyle, { DynamicFntSize, DynamicM } from '../Styles';
import { CSvg } from '../../components/SVGassets';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

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
              <Image style={[{ width: "100%", height: "84%", resizeMode: "contain", }]} source={require('../../assets/SliderImages/image1.png')} ></Image >

            </View>
          </View>
        ))}
      </Carousel>
    );
  } else if (props.type == "text-slider") {
    return (
      <Carousel
        autoplay
        autoplayTimeout={2000}
        loop
        index={0}
        pageIndicatorStyle={{ backgroundColor: '#3C5F8C', }}
        pageIndicatorContainerStyle={{ position: "absolute", top: 0, right: 10 }}
        activePageIndicatorStyle={{ backgroundColor: 'white', width: 8, height: 8 }}

        pageSize={BannerWidth}>
        {props.list.map((item, index) => (
          <View style={[{ flex: 1, width: "90%", alignSelf: "center" }]}>
            <Text style={[{ color: "white" }, DynamicFntSize(20)]}>Featured Events</Text>
            <View style={[{ width: 62, borderBottomColor: "white", borderBottomWidth: 1 }, DynamicM(10, 10, 0, 0)]}></View>
            <Text style={[{ color: "white" }, DynamicFntSize(15)]}>The 10th RMUTP International Conference on Science, Technology and Innovation for Sustainable Development: Challenges towards digital society.</Text>
            <Text style={[{ color: "#E4E4E4" }, DynamicFntSize(13), DynamicM(10, 10, 0, 0)]}>The Sukosol Hotel, Bangkok, Thailand, 4-5 June 2019</Text>

          </View>
        ))}
      </Carousel>
    );
  }
};

export { CCarousel };
