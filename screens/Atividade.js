import React, { Component } from 'react';
import ActivityBody from '../components/ActivityBody';
import images from '../assets/images/atividades';
import StackScreenTemplate from '../components/StackScreenTemplate';

export class Atividade extends Component {
  render() {
    const { route } = this.props;
    return (
      <StackScreenTemplate source={images[route.params.imagem]}>
        <ActivityBody data={route.params} />
      </StackScreenTemplate>
    );
  }
}

export default Atividade;
