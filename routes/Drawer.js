import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AtividadesStack from './AtividadesStack';
import Home from '../screens/Home';
import Atividades from '../screens/Atividades';
import SobreNós from '../screens/SobreNós';

const Drawer = createDrawerNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Atividades' component={AtividadesStack} />
          <Drawer.Screen name='SobreNós' component={SobreNós} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
