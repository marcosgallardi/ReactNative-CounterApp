import React from 'react';
// import {ContadorScreen} from './src/screens/ContadorScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {DimensioneScreem} from './src/screens/DimensioneScreem';
// import { HolaMundoScreen } from './src/components/HolaMundoScreen'

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* // <HolaMundoScreen/> */}
      {/* // <ContadorScreen /> */}
      {/* <DimensioneScreem /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen/>
    </SafeAreaView>
  );
};
