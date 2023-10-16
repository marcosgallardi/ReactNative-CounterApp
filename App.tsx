import React from 'react';
// import {ContadorScreen} from './src/screens/ContadorScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
// import { HolaMundoScreen } from './src/components/HolaMundoScreen'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <BoxObjectModelScreen />
      {/* // <HolaMundoScreen/> */}
      {/* // <ContadorScreen /> */}
    </SafeAreaView>
  );
};
