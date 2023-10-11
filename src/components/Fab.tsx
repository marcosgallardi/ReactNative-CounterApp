import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

interface Props {
  title: string;
  position: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position}: Props) => {
  return (
    <View
      style={position === 'br' ? styles.fabLocationBR : styles.fabLocationLF}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple("blue", false,10)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
