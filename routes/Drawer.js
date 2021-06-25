import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AtividadesStack from './AtividadesStack';
import HomeStack from './HomeStack';
import RecadosStack from './RecadosStack';

const Drawer = createDrawerNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Início' component={HomeStack} />
          <Drawer.Screen name='Atividades' component={AtividadesStack} />
          <Drawer.Screen name='Recados' component={RecadosStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
