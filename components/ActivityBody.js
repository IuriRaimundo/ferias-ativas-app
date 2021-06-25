import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import ActivityDetails from './ActivityDetails';
import ActivitiesList from './ActivitiesList';

export class ActivityBody extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <Text style={styles.mediumText}>Encontro</Text>
        <ActivityDetails hora={data.encontro.hora} local={data.encontro.local} />
        <Text style={styles.mediumText}>Despedida</Text>
        <ActivityDetails hora={data.despedida.hora} local={data.despedida.local} />
        <Text style={{ ...globalStyles.largeText, ...{ marginBottom: 5 } }}>Atividades</Text>
        <ActivitiesList data={data.atividades} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mediumText: {
    fontFamily: 'Montserrat',
    fontSize: 26,
  },
});

export default ActivityBody;
