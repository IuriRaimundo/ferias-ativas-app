import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AtividadesStack from './AtividadesStack';
import HomeStack from './HomeStack';
import SobreNósStack from './SobreNósStack';
import RegulamentoStack from './RegulamentoStack';

const Drawer = createDrawerNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Início' component={HomeStack} />
          <Drawer.Screen name='Atividades' component={AtividadesStack} />
          <Drawer.Screen name='Regulamento' component={RegulamentoStack} />
          <Drawer.Screen name='Sobre Nós' component={SobreNósStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
