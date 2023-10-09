import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  contador: number;
  setContador: number;
}

export const Fab = ({title, setContador, contador}: Props) => {
  return (
    <>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setContador(contador + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  fabLocationLF: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
