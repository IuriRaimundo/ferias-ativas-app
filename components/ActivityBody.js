import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import ActivitiesList from './ActivitiesList';

export class ActivityBody extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <Text style={globalStyles.largeText}>Atividades da manhã</Text>
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
            <MaterialIcons name='access-time' size={30} color='coral' />
            <Text style={styles.iconViewText}>{data.hora}</Text>
          </View>
          <View style={styles.iconView}>
            <MaterialIcons name='location-on' size={30} color='coral' />
            <Text style={styles.iconViewText}>{data.local}</Text>
          </View>
        </View>
        <Text style={styles.mediumText}>Atividades:</Text>
        <ActivitiesList data={data.atividades} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    marginTop: 20,
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
  mediumText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 26,
  },
});

export default ActivityBody;
