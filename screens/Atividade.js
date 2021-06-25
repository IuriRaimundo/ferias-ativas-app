import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import ActivityBody from '../components/ActivityBody';

export class Atividade extends Component {
  render() {
    const { route } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={route.params.imagem} />
        <View style={styles.scrollViewWrapper}>
          <ScrollView contentContainerStyle={styles.body}>
            <ActivityBody data={route.params} />
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
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default Atividade;
