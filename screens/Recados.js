import React, { Component } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import AppContext from '../utils/AppContext';
import Overlay from '../components/Overlay';
import RecadoCard from '../components/RecadoCard';
import Loading from '../components/Loading';

class Recados extends Component {
  constructor(props) {
    super(props);
    this.state = { recados: [] };
  }

  static contextType = AppContext;

  render() {
    const { navigation } = this.props;
    const { recados } = this.context;

    return (
      <ImageBackground source={require('../assets/fundo.jpg')} style={{ flex: 1 }}>
        <Overlay />
        {recados.length > 0 ? (
          <ScrollView style={{ elevation: 10 }} contentContainerStyle={{ padding: 20, justifyContent: 'center' }}>
            {recados.map((recado) => (
              <RecadoCard data={recado} navigation={navigation} key={recado.id} />
            ))}
          </ScrollView>
        ) : (
          <Loading theme={'dark'} />
        )}
      </ImageBackground>
    );
  }
}

export default Recados;
