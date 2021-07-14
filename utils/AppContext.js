import React, { Component } from 'react';
import { request } from '../utils/request';

const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    recados: [],
    atividades: [],
  };

  setRecados = () => {
    request('GET', 'recados').then((result) => {
      // Ordenar recados por ordem descrecente com a timestamp
      result.sort(function (x, y) {
        return y.timestamp - x.timestamp;
      });
      this.setState((prevState) => ({ ...prevState, recados: result }));
    });
  };

  setAtividades = () => {
    request('GET', 'atividades').then((result) => {
      this.setState((prevState) => ({ ...prevState, atividades: result }));
    });
  };

  componentDidMount() {
    this.setRecados();
    this.setAtividades();
  }

  render() {
    const { children } = this.props;
    const recados = this.state.recados;
    const atividades = this.state.atividades;

    return (
      <AppContext.Provider
        value={{
          recados,
          atividades,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppContextProvider };
