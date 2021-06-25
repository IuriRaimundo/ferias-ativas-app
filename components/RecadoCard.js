import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class RecadoCard extends Component {
  pressHandler(navigation, data) {
    navigation.navigate('Recado', data);
  }
  render() {
    const { data, navigation } = this.props;
    const date = new Date(data.timestamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDays = `${day}/${month}/${year}`;
    const formmattedHours = `${hours}:${minutes}`;

    return (
      <TouchableOpacity onPress={() => this.pressHandler(navigation, data)}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{data.titulo}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.headerTextSecondary}>{formattedDays}</Text>
              <Text style={styles.headerTextSecondary}>{formmattedHours}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text numberOfLines={5} style={styles.bodyText}>
              {data.corpo}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 18,
    maxWidth: 210,
    fontFamily: 'Montserrat-SemiBold',
  },
  headerTextSecondary: {
    textAlign: 'right',
    fontSize: 17,
    fontFamily: 'Montserrat',
    marginLeft: 8,
  },
  body: {
    paddingVertical: 10,
    borderTopColor: 'rgba(0, 0, 0, 0.24)',
    borderTopWidth: 1,
  },
  bodyText: {
    fontFamily: 'Montserrat',
  },
});

export default RecadoCard;
