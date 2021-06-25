import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class ActivitiesList extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <View style={styles.listWrapper}>
          {data.map((item, index) => (
            <Text key={index} style={styles.item}>{`\u2022 ${item}`}</Text>
          ))}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    marginVertical: 5,
  },
  item: {
    fontSize: 22,
    marginVertical: 6,
    fontFamily: 'Montserrat',
  },
});

export default ActivitiesList;
