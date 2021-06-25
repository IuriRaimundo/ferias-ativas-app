import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import imagem from '../assets/cartão-férias-ativas.jpg';

export class Recado extends Component {
  render() {
    const { params } = this.props.route;
    params.corpo = params.corpo.replace(/\n/g, '\n');

    const date = new Date(params.timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={imagem} />
        <View style={styles.scrollViewWrapper}>
          <ScrollView contentContainerStyle={styles.body}>
            <View style={styles.bodyHeader}>
              <Text style={styles.bodyHeaderText}>
                Emitido em <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>{formattedDate}</Text>
              </Text>
            </View>
            <Text style={styles.bodyText}>{params.corpo}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: '100%',
  },
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
    top: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bodyHeader: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.24)',
    borderBottomWidth: 1,
    paddingBottom: 14,
  },
  bodyHeaderText: {
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  bodyText: {
    marginVertical: 10,
    fontSize: 15,
    fontFamily: 'Montserrat',
  },
});
export default Recado;
