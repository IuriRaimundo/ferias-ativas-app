import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

class Loading extends Component {
  state = {
    moveAnim1: new Animated.Value(0),
    moveAnim2: new Animated.Value(0),
    moveAnim3: new Animated.Value(0),
  };

  MoveDown1 = () => {
    Animated.timing(this.state.moveAnim1, {
      toValue: 4,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      this.MoveUp1();
    });
  };

  MoveDown2 = (secondRun) => {
    if (secondRun) {
      Animated.timing(this.state.moveAnim2, {
        toValue: 4,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        this.MoveUp2();
      });
    } else {
      setTimeout(() => {
        Animated.timing(this.state.moveAnim2, {
          toValue: 4,
          duration: 600,
          useNativeDriver: true,
        }).start(() => {
          this.MoveUp2();
        });
      }, 300);
    }
  };

  MoveDown3 = (secondRun) => {
    if (secondRun) {
      Animated.timing(this.state.moveAnim3, {
        toValue: 4,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        this.MoveUp3();
      });
    } else {
      setTimeout(() => {
        Animated.timing(this.state.moveAnim3, {
          toValue: 4,
          duration: 600,
          useNativeDriver: true,
        }).start(() => {
          this.MoveUp3();
        });
      }, 600);
    }
  };

  MoveUp1 = () => {
    Animated.timing(this.state.moveAnim1, {
      toValue: -4,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      this.MoveDown1();
    });
  };
  MoveUp2 = () => {
    Animated.timing(this.state.moveAnim2, {
      toValue: -4,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      this.MoveDown2(true);
    });
  };
  MoveUp3 = () => {
    Animated.timing(this.state.moveAnim3, {
      toValue: -4,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      this.MoveDown3(true);
    });
  };

  render() {
    this.MoveDown1();
    this.MoveDown2();
    this.MoveDown3();
    const { theme } = this.props;

    return (
      <View style={styles.container}>
        <Text style={theme === 'dark' ? { ...styles.text, ...styles.darkTheme } : styles.text}>A carregar</Text>
        <View style={styles.dotsWrapper}>
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [{ translateY: this.state.moveAnim1 }],
              },
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [{ translateY: this.state.moveAnim2 }],
              },
            ]}
          ></Animated.View>
          <Animated.View
            style={[
              styles.dot,
              {
                transform: [{ translateY: this.state.moveAnim3 }],
              },
            ]}
          ></Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 100,
    transform: [{ translateY: -30 }],
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 24,
  },
  dotsWrapper: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  dot: {
    width: 14,
    height: 14,
    marginHorizontal: 3,
    borderRadius: 50,
    backgroundColor: 'rgb(0, 122, 255)',
  },
  darkTheme: {
    color: '#fff',
  },
});

export default Loading;
