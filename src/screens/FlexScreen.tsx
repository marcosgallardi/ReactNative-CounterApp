import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja1</Text>
      <Text style={styles.caja2}>Caja2</Text>
      <Text style={styles.caja3}>Caja3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  caja1: {
    flex: 1,
    borderWidth: 2,
    fontSize: 30,
  },
  caja2: {
    borderWidth: 2,
    fontSize: 30,
  },
  caja3: {
    borderWidth: 2,
    fontSize: 30,
  },
});
