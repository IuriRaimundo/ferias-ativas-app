import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Overlay extends Component {
  render() {
    return <View style={styles.linearGradient}></View>;
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    elevation: 1,
  },
});
