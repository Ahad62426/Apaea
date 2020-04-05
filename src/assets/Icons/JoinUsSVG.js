import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Svg
          width={this.props.size}
          height={this.props.size}
          fill={this.props.color}
          viewBox="0 0 18.108 15.573">
          <Path
            id="Path_10"
            data-name="Path 10"
            d="M88.946,7.235a3.614,3.614,0,1,1,3.614-3.614A3.618,3.618,0,0,1,88.946,7.235Zm0-6.143a2.53,2.53,0,1,0,2.53,2.53,2.532,2.532,0,0,0-2.53-2.53Zm0,0"
            transform="translate(-82.441 -0.008)"
            fill="#fff"
          />
          <Path
            id="Path_11"
            data-name="Path 11"
            d="M12.467,262.513H.542A.542.542,0,0,1,0,261.971v-2.53a3.437,3.437,0,0,1,3.433-3.433H9.576a3.437,3.437,0,0,1,3.433,3.433v2.53A.542.542,0,0,1,12.467,262.513ZM1.084,261.429H11.925v-1.988a2.352,2.352,0,0,0-2.349-2.349H3.433a2.352,2.352,0,0,0-2.349,2.349Zm0,0"
            transform="translate(0 -247.335)"
            fill="#fff"
          />
          <Path
            id="Path_15"
            data-name="Path 15"
            d="M668.551,7.241a.542.542,0,0,1-.533-.551l.044-2.52h-2.52a.542.542,0,0,1,0-1.084h2.539l.044-2.539a.542.542,0,0,1,1.084.019l-.044,2.52h2.52a.542.542,0,1,1,0,1.084h-2.539L669.1,6.709a.542.542,0,0,1-.542.532Z"
            transform="translate(-656.119 6.331)"
            fill="#0e3968"
            stroke="#0e3968"
            stroke-width="4"
          />
          <G
            id="Group_212"
            data-name="Group 212"
            transform="translate(8.881 6.337)">
            <Path
              id="Path_12"
              data-name="Path 12"
              d="M305.353,187.76H299.21a.542.542,0,0,1,0-1.084h6.143a.542.542,0,1,1,0,1.084Zm0,0"
              transform="translate(-298.668 -183.595)"
              fill="#fff"
            />
            <Path
              id="Path_14"
              data-name="Path 14"
              d="M6.685,1.084H.542A.542.542,0,1,1,.542,0H6.685a.542.542,0,1,1,0,1.084Zm0,0"
              transform="translate(3.009 7.226) rotate(-89)"
              fill="#fff"
            />
          </G>
        </Svg>
      </View>
    );
  }
}
