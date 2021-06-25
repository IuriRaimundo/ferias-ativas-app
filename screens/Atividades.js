import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import content from '../assets/atividades/atividades';
import ActivityCard from '../components/ActivityCard';

export class Atividades extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={styles.list}
          data={content}
          numColumns={2}
          keyExtractor={(item) => item.dia}
          renderItem={({ item }) => {
            return <ActivityCard activity={item} navigation={navigation} />;
          }}
        />
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
