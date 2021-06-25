import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import { headerStyle } from '../styles/globalStyles';
import Recados from '../screens/Recados';
import Recado from '../screens/Recado';

const Stack = createStackNavigator();

class RecadosStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Recados'
        screenOptions={{
          headerStyle,
        }}
      >
        <Stack.Screen
          name='Recados'
          component={Recados}
          options={({ navigation }) => {
            return { headerTitle: () => <Header navigation={navigation} /> };
          }}
        />
        <Stack.Screen
          name='Recado'
          component={Recado}
          options={({ route }) => {
            return { headerTitle: route.params.titulo };
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default RecadosStack;
