import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class ActivitiesList extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <View style={styles.listWrapper}>
          {data.map((item, index) => (
            <Text key={index} style={styles.item}>{`\u2022 ${data}`}</Text>
          ))}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    marginTop: 15,
  },
  item: {
    fontSize: 24,
    fontFamily: 'Montserrat',
  },
});

export default ActivitiesList;
