import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Overlay from './Overlay';

class Card extends Component {
  constructor({ image, children, target, navigation, overlay }) {
    super();
    this.image = image;
    this.children = children;
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

  renderChildren() {
    if (Array.isArray(this.children)) {
      return this.children.map((children, key) => {
        return React.cloneElement(children, { style: { ...styles.cardChildren, ...children.props.style }, key: key });
      });
    } else {
      return React.cloneElement(this.children, { style: { ...styles.cardChildren, ...this.children.props.style } });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.pressHandler}>
        <ImageBackground source={this.image} style={styles.card}>
          {this.renderChildren()}
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
  cardChildren: {
    elevation: 10,
    color: '#fff',
  },
});

export default Card;
