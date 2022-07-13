import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HomeScreen from './src/screens/HomeScreen.js';
import GuessTheCountryScreen from './src/screens/GuessTheCountryScreen.js';

const App = () => {
  return(
    <SafeAreaProvider>
      <GuessTheCountryScreen />
    </SafeAreaProvider>
  )
};

export default App;