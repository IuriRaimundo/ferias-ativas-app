import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import Overlay from './Overlay';
import images from '../assets/images/atividades';
import formatDate from '../utils/formatDate';

class ActivityCard extends Component {
  constructor({ activity, navigation }) {
    super();
    this.activity = activity;
    this.navigation = navigation;
  }

  pressHandler = () => {
    this.navigation.navigate('Atividade', this.activity);
  };

  render() {
    const overlayImages = {
      default: true,
      cineteatro: false,
      biblioteca: false,
      biblioteca2: true,
      ponteDaPedra: false,
      ponteDaPedra2: false,
      olhosDeÁgua: false,
      olhosDeÁgua2: true,
      piscinas: false,
      grutas: true,
      praça8deMaio: false,
    };

    return (
      <TouchableOpacity onPress={this.pressHandler}>
        {this.overlay && <Overlay />}
        <ImageBackground source={images[this.activity.imagem]} style={styles.card}>
          <Text style={styles.cardChildren}>{formatDate(this.activity.dia)}</Text>
          {overlayImages[this.activity.imagem] && <Overlay />}
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
