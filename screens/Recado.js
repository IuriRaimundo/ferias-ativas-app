import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StackScreenTemplate from '../components/StackScreenTemplate';

export class Recado extends Component {
  render() {
    const { params } = this.props.route;
    params.corpo = params.corpo.replace(/\n/g, '\n'); // Para fazer os parágrafos

    const date = new Date(params.timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    return (
      <StackScreenTemplate>
        <View style={{ flex: 1 }}>
          <View style={styles.bodyHeader}>
            <Text style={styles.bodyHeaderText}>
              Emitido em <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>{formattedDate}</Text>
            </Text>
          </View>
          <Text style={styles.bodyText}>{params.corpo}</Text>
        </View>
      </StackScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  bodyHeader: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.24)',
    borderBottomWidth: 1,
    paddingBottom: 14,
  },
  bodyHeaderText: {
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  bodyText: {
    marginVertical: 10,
    fontSize: 15,
    fontFamily: 'Montserrat',
  },
});

export default Recado;
