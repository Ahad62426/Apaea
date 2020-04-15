import Svg, { G, Path } from 'react-native-svg';

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
          viewBox="0 0 15.049 13.339">
          <G
            id="Group_211"
            data-name="Group 211"
            transform="translate(-6.188 -12.994)">
            <G id="user" transform="translate(6.188 12.994)">
              <Path
                id="Path_10"
                data-name="Path 10"
                d="M88.508,6.36a3.176,3.176,0,1,1,3.176-3.176A3.18,3.18,0,0,1,88.508,6.36Zm0-5.4a2.223,2.223,0,1,0,2.223,2.223A2.226,2.226,0,0,0,88.508.961Zm0,0"
                transform="translate(-79.176 -0.008)"
                fill="#fff"
              />
              <Path
                id="Path_11"
                data-name="Path 11"
                d="M10.957,261.725H.476A.477.477,0,0,1,0,261.248v-2.223a3.021,3.021,0,0,1,3.017-3.017h5.4a3.021,3.021,0,0,1,3.017,3.017v2.223A.477.477,0,0,1,10.957,261.725Zm-10-.953h9.528v-1.747a2.067,2.067,0,0,0-2.064-2.064h-5.4a2.067,2.067,0,0,0-2.064,2.064Zm0,0"
                transform="translate(3.615 -248.386)"
                fill="#fff"
              />
              <G
                id="Group_210"
                data-name="Group 210"
                transform="translate(0 3.016)">
                <Path
                  id="Path_12"
                  data-name="Path 12"
                  d="M299.144,187.629h5.4a.476.476,0,1,0,0-.953h-5.4a.476.476,0,1,0,0,.953Zm0,0"
                  transform="translate(-298.668 -184.134)"
                  fill="#fff"
                />
                <Path
                  id="Path_13"
                  data-name="Path 13"
                  d="M397.689,107.34a.477.477,0,0,0,.337-.814l-2.2-2.2,2.2-2.2a.477.477,0,0,0-.674-.674l-2.541,2.541a.477.477,0,0,0,0,.674l2.541,2.541A.473.473,0,0,0,397.689,107.34Zm0,0"
                  transform="translate(-394.672 -101.305)"
                  fill="#fff"
                />
              </G>
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
