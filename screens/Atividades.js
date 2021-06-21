import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export class Atividades extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.h1}>Página de Atividades</Text>
        <Button title='Atividade' onPress={() => this.props.navigation.navigate('Atividade')} />
      </View>
    );
  }
}

export default Atividades;
