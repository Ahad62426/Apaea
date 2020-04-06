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
          viewBox="0 0 512 512">
          <G>
            <Path
              fill={this.props.color1}
              d="M479.18,91.897H32.821C14.69,91.897,0,77.207,0,59.077s14.69-32.821,32.821-32.821H479.18   c18.13,0,32.82,14.69,32.82,32.821S497.31,91.897,479.18,91.897z"
            />
            <Path
              fill={this.props.color1}
              d="M295.385,288.821H32.821C14.69,288.821,0,274.13,0,256s14.69-32.821,32.821-32.821h262.564   c18.13,0,32.821,14.69,32.821,32.821S313.515,288.821,295.385,288.821z"
            />
          </G>
          <Path
            fill={this.props.color}
            d="M479.18,288.821h-52.513c-18.13,0-32.821-14.69-32.821-32.821s14.69-32.821,32.821-32.821h52.513  c18.13,0,32.82,14.69,32.82,32.821S497.31,288.821,479.18,288.821z"
          />
          <Path
            fill={this.props.color1}
            d="M479.18,485.744H32.821C14.69,485.744,0,471.053,0,452.923c0-18.13,14.69-32.821,32.821-32.821  H479.18c18.13,0,32.82,14.69,32.82,32.821C512,471.053,497.31,485.744,479.18,485.744z"
          />
        </Svg>
      
      </View>
    );
  }
}