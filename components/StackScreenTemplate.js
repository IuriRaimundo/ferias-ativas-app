import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import images from '../assets/images/atividades';

export class StackScreenTemplate extends Component {
  render() {
    const { source, children } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={source ? source : images['imagem1']} />
        <View style={styles.scrollViewWrapper}>
          <ScrollView contentContainerStyle={styles.body}>{children}</ScrollView>
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
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default StackScreenTemplate;
