import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class LinearGradient extends Component {
  render() {
    return <View style={styles.linearGradient}></View>;
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    elevation: 1,
  },
});
