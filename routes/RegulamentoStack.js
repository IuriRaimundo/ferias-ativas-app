import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/header';
import Regulamento from '../screens/Regulamento';
import { headerStyle } from '../styles/globalStyles';

const Stack = createStackNavigator();

class RegulamentoStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Regulamento'
        screenOptions={{
          headerStyle,
        }}
      >
        <Stack.Screen
          name='Regulamento'
          component={Regulamento}
          options={({ navigation, route }) => {
            return { headerTitle: () => <Header navigation={navigation} /> };
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default RegulamentoStack;
