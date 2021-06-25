import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export class ActivityDetails extends Component {
  render() {
    const { hora, local } = this.props;
    return (
      <View style={styles.details}>
        <View
          style={{
            ...styles.iconView,
            ...{
              borderBottomColor: 'rgba(0, 0, 0, 0.12)',
              borderBottomWidth: 1,
            },
          }}
        >
          <MaterialIcons name='access-time' size={30} color='rgba(0, 122, 255, 0.7)' />
          <Text style={styles.iconViewText}>{hora}</Text>
        </View>
        <View style={styles.iconView}>
          <MaterialIcons name='location-on' size={30} color='rgba(0, 122, 255, 0.7)' />
          <Text style={styles.iconViewText}>{local}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    marginTop: 10,
    marginBottom: 15,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.12)',
    borderTopWidth: 1,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    overflow: 'hidden',
  },
  iconViewText: {
    paddingLeft: 10,
    fontFamily: 'Montserrat',
    fontSize: 15,
  },
});
export default ActivityDetails;
