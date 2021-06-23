import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import ActivityBody from '../components/ActivityBody';
import ActivityBodyTarde from '../components/ActivityBodyTarde';

export class Atividade extends Component {
  render() {
    const { route } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={route.params.imagem} />
        <View style={styles.scrollViewWrapper}>
          <ScrollView contentContainerStyle={styles.body}>
            <ActivityBody data={route.params.atividadesManhã} />
            <View style={styles.divider}></View>
            <ActivityBodyTarde data={route.params.atividadesTarde} />
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
    overflow: 'hidden',
    position: 'relative',
    top: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  divider: {
    marginVertical: 50,
    borderBottomColor: 'rgba(0, 0, 0, 0.24)',
    borderBottomWidth: 1,
  },
});
export default Atividade;
