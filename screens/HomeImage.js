import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import LinearGradient from '../components/LinearGradient';
import Card from '../components/Card';
import imagemAtividades from '../assets/cartão-atividades.jpg';
import imagemRegulamento from '../assets/cartão-regulamento.jpg';

export class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={require('../assets/fundo.jpg')} style={styles.backgroundImage}>
        <LinearGradient />
        <ScrollView style={globalStyles.container}>
          <Card target='Atividades' image={imagemAtividades} navigation={navigation}>
            <Text style={{ ...globalStyles.largeText, ...styles.text }}>Atividades</Text>
            <Text style={{ ...globalStyles.mediumText, ...styles.text }}>Veja as atividades programadas</Text>
          </Card>
          <Card target='https:/docs.expo.io' image={imagemRegulamento} navigation={navigation}>
            <Text style={{ ...globalStyles.largeText, ...styles.text }}>Regulamento</Text>
            <Text style={{ ...globalStyles.mediumText, ...styles.text }}>Veja o regulamento das Férias Ativas</Text>
          </Card>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    paddingVertical: 10,
  },
});
export default Home;
