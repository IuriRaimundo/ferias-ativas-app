import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/header';
import SobreNós from '../screens/SobreNós';
import { headerStyle } from '../styles/globalStyles';

const Stack = createStackNavigator();

class SobreNósStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='Sobre Nós'
        screenOptions={{
          headerStyle,
        }}
      >
        <Stack.Screen
          name='Sobre Nós'
          component={SobreNós}
          options={({ navigation, route }) => {
            return { headerTitle: () => <Header navigation={navigation} /> };
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default SobreNósStack;
