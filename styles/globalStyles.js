import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    elevation: 10,
  },
  text: {
    fontFamily: 'Montserrat',
  },
  largeText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
  },
  mediumText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
  },
});

export const headerStyle = {
  backgroundColor: '#fff',
  height: 100,
};
