import React, { Component } from 'react';
import { ScrollView, ImageBackground, Text } from 'react-native';
import AppContext from '../utils/AppContext';
import Overlay from '../components/Overlay';
import RecadoCard from '../components/RecadoCard';
import data from '../recados.json';

class Recados extends Component {
  constructor(props) {
    super(props);
    this.state = { recados: [] };
  }

  static contextType = AppContext;

  componentDidMount() {
    const route = this.props.route;
    console.log(route.params);
    if (route.params && route.params.openLatestRecado) {
      route.params.openLatestRecado();
    }
  }

  render() {
    const { navigation } = this.props;
    const { recados } = this.context;

    return (
      <ImageBackground source={require('../assets/fundo.jpg')} style={{ flex: 1 }}>
        <Overlay />
        <ScrollView style={{ elevation: 10 }} contentContainerStyle={{ padding: 20 }}>
          {recados.length > 0 ? (
            data.recados.map((recado) => <RecadoCard data={recado} navigation={navigation} key={recado.id} />)
          ) : (
            <Text style={{ fontSize: 20, fontFamily: 'Montserrat', color: '#fff', textAlign: 'center' }}>A carregar ...</Text>
          )}
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Recados;
