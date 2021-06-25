import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from '../styles/globalStyles';
import Overlay from './Overlay';

class Card extends Component {
  constructor({ image, text, target, navigation, overlay }) {
    super();
    this.image = image;
    this.text = text;
    this.target = target;
    this.navigation = navigation;
    this.overlay = overlay;
  }

  pressHandler = () => {
    if (this.target.includes('http')) {
      WebBrowser.openBrowserAsync(this.target);
    } else {
      this.navigation.navigate(this.target);
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.pressHandler}>
        <ImageBackground source={this.image} style={styles.card}>
          <Text style={{ ...globalStyles.largeText, ...styles.text }}>{this.text[0]}</Text>
          <Text style={{ ...globalStyles.mediumText, ...styles.text }}>{this.text[1]}</Text>
          {this.overlay && <Overlay />}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#212931',
    overflow: 'hidden',
  },
  text: {
    paddingVertical: 10,
    color: '#fff',
    elevation: 10,
  },
});

export default Card;
