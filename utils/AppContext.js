import React, { Component } from 'react';
import recados from '../recados.json'; // TEMP
import atitividades from '../atividades.json'; // TEMP
import atividades from '../assets/atividades/atividades';

const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    recados: {},
    atividades: {},
  };

  setRecados = () => {
    this.setState((prevState) => ({ ...prevState, recados: recados }));
    /*     request('GET', 'recados').then((result) => {
      this.setState((prevState) => ({ ...prevState, recados: result }));
    }); */
  };

  setAtividades = () => {
    this.setState((prevState) => ({ ...prevState, atividades: atividades }));
    /*     request('GET', 'atividades').then((result) => {
      this.setState((prevState) => ({ ...prevState, atividades: result }));
    }); */
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
