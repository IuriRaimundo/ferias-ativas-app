import React, { Component } from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/Drawer';

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
    if (this.state.fontsLoaded) {
      return <Navigator />;
    } else {
      return null;
    }
  }
}

export default App;
