import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Atividades from '../screens/Atividades';
import Atividade from '../screens/Atividade';

const Stack = createStackNavigator();

class AtividadesStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Atividades'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'coral',
            height: 100,
          },
          headerTintColor: '#fafafa',
        }}
      >
        <Stack.Screen name='Atividades' component={Atividades} />
        <Stack.Screen name='Atividade' component={Atividade} />
      </Stack.Navigator>
    );
  }
}

export default AtividadesStack;
