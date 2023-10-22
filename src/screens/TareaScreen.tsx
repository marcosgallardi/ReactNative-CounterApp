import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaCelete} />
      {/* <Text>
        hola
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  cajaMorada: {
    height:100,
    width:100,
    borderWidth: 7,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    height:100,
    width:100,
    borderWidth: 7,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    top:50
    
  },
  cajaCelete: {
    height:100,
    width:100,
    borderWidth: 7,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
  },
});
