import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    width: 100,
    paddingHorizontal: 10,
    borderWidth: 5,
    // backgroundColor:"red"
  },
});
