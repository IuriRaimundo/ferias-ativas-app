import React, { Component } from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/Drawer';
import { AppContextProvider } from './utils/AppContext';

export class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': {
        uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // "Acordar" API
    fetch('https://feriasativas.herokuapp.com/');

    if (this.state.fontsLoaded) {
      return (
        <AppContextProvider>
          <Navigator />
        </AppContextProvider>
      );
    } else {
      return null;
    }
  }
}

export default App;
