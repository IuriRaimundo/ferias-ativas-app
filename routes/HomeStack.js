import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/header';
import Home from '../screens/Home';
import { headerStyle } from '../styles/globalStyles';

const Stack = createStackNavigator();

class HomeStack extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle,
        }}
      >
        <Stack.Screen
          name='Home'
          options={({ navigation, route }) => {
            return { headerTitle: () => <Header navigation={navigation} /> };
          }}
        >
          {(props) => <Home {...props} drawerNavigate={navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
