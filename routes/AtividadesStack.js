import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Atividades from '../screens/Atividades';
import Atividade from '../screens/Atividade';
import Header from '../components/header';
import { headerStyle } from '../styles/globalStyles';

const Stack = createStackNavigator();

class AtividadesStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Atividades'
        screenOptions={{
          headerStyle,
        }}
      >
        <Stack.Screen
          name='Atividades'
          component={Atividades}
          options={({ navigation, route }) => {
            return { headerTitle: () => <Header navigation={navigation} /> };
          }}
        />
        <Stack.Screen name='Atividade' component={Atividade} options={({route}) => {
          return { headerTitle: 'Atividades de ' + route.params.dia }
          }}/>
      </Stack.Navigator>
    );
  }
}

export default AtividadesStack;
