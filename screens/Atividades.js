import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AppContext from '../utils/AppContext';
import ActivityCard from '../components/ActivityCard';

export class Atividades extends Component {
  static contextType = AppContext;

  render() {
    const { navigation } = this.props;
    const { atividades } = this.context;
    return (
      <View style={styles.container}>
        {atividades.length !== 0 && (
          <FlatList
            columnWrapperStyle={styles.list}
            data={atividades}
            numColumns={2}
            keyExtractor={(item) => item.dia}
            renderItem={({ item }) => {
              return <ActivityCard activity={item} navigation={navigation} />;
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    justifyContent: 'center',
  },
});

export default Atividades;
