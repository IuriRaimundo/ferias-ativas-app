import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
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
    const { recados } = this.context;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {recados.length !== 0 && <LatestRecadoCard data={recados[0]} navigation={navigation} />}
          <Card
            target='Atividades'
            image={imagemAtividades}
            navigation={navigation}
            text={['Atividades', 'Veja as atividades programadas']}
          />

          <Card
            target='Recados'
            image={imagemFériasAtivas}
            overlay={true}
            navigation={navigation}
            text={['Recados', 'Recados para os participantes']}
          />

          <Card
            target='https://pemoiseshotmail.github.io/feriasemalcanena/'
            image={imagemFériasAtivas}
            overlay={true}
            navigation={navigation}
            text={['Férias ativas', 'Consulte o webstie para saber mais']}
          />

          <Card
            target='https://pemoiseshotmail.github.io/feriasemalcanena/regulamento'
            image={imagemRegulamento}
            navigation={navigation}
            text={['Regulamento', 'Veja o regulamento das Férias Ativas']}
          />
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
});

export default Home;
