

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';



export default class Cinemas extends Component {
  static navigationOptions = {
    title: '影院',
    header: null
  };
  render() {
    return (
      <View>
        <Text>影院页</Text>
      </View>
    );
  }
}
