import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Rajdhani_400Regular,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import theme from './src/global/styles/theme';
import { View, Text } from 'react-native'

import { Dashboard } from './src/screens/Dashboard';
import { Rack } from './src/screens/Rack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <View>
      <Text>Loading</Text>
    </View>
  }

  return <ThemeProvider theme={theme}>
    <Rack />
    <StatusBar barStyle='light-content' />
  </ThemeProvider>
}