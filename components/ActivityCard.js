import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import Overlay from './Overlay';
import images from '../assets/images/atividades';

class ActivityCard extends Component {
  constructor({ activity, navigation, overlay }) {
    super();
    this.activity = activity;
    this.navigation = navigation;
  }

  pressHandler = () => {
    this.navigation.navigate('Atividade', this.activity);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.pressHandler}>
        {this.overlay && <Overlay />}
        <ImageBackground source={images[this.activity.imagem]} style={styles.card}>
          <Text style={styles.cardChildren}>{this.activity.dia}</Text>
          {this.activity.overlay && <Overlay />}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#212931',
    overflow: 'hidden',
  },
  cardChildren: {
    fontSize: 23,
    padding: 10,
    fontFamily: 'Montserrat',
    elevation: 10,
    color: '#fff',
  },
});

export default ActivityCard;
