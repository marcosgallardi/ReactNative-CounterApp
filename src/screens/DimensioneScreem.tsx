import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensioneScreem = () => {
  let {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width.toFixed(0)}, H: {height.toFixed(0)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 600,
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
