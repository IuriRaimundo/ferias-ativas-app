import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';

class Card extends Component {
  constructor({ image, children }) {
    super();
    this.image = image;
    this.children = children;
  }

  render() {
    const pressHandler = () => {};

    return (
      <TouchableWithoutFeedback onPress={pressHandler}>
        <ImageBackground source={this.image} style={styles.card}>
          {this.children}
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#212931',
    overflow: 'hidden',
  },
});

export default Card;
