import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import AppContext from '../utils/AppContext';
import Card from '../components/Card';
import LatestRecadoCard from '../components/LastestRecadoCard';
import imagemAtividades from '../assets/cartão-atividades.jpg';
import imagemRegulamento from '../assets/cartão-regulamento.jpg';
import imagemFériasAtivas from '../assets/cartão-férias-ativas.jpg';

export class Home extends Component {
  static contextType = AppContext;

  render() {
    const { navigation } = this.props;
    const { recados } = this.context.recados;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {recados && <LatestRecadoCard data={recados[0]} navigation={navigation} />}
          <Card target='Atividades' image={imagemAtividades} navigation={navigation}>
            <Text style={{ ...globalStyles.largeText, ...styles.text }}>Atividades</Text>
            <Text style={{ ...globalStyles.mediumText, ...styles.text }}>Veja as atividades programadas</Text>
          </Card>
          <Card target='Recados' image={imagemFériasAtivas} overlay={true} navigation={navigation}>
            <Text style={{ ...globalStyles.largeText, ...styles.text }}>Recados</Text>
            <Text style={{ ...globalStyles.mediumText, ...styles.text }}>Recados para os participantes</Text>
          </Card>
          <Card
            target='https://pemoiseshotmail.github.io/feriasemalcanena/'
            image={imagemFériasAtivas}
            overlay={true}
            navigation={navigation}
          >
            <Text style={{ ...globalStyles.largeText, ...styles.text }}>Férias Ativas</Text>
            <Text style={{ ...globalStyles.mediumText, ...styles.text }}>Consulte o website para saber mais</Text>
          </Card>
          <Card
            target='https://pemoiseshotmail.github.io/feriasemalcanena/regulamento'
            image={imagemRegulamento}
            navigation={navigation}
          >
            <Text style={{ ...globalStyles.largeText, ...styles.text }}>Regulamento</Text>
            <Text style={{ ...globalStyles.mediumText, ...styles.text }}>Veja o regulamento das Férias Ativas</Text>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
  },
  text: {
    paddingVertical: 10,
  },
});
export default Home;
