import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import { 
  useFonts, 
  Rajdhani_400Regular,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { View, Text } from 'react-native'

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
    <Dashboard />
    <StatusBar barStyle='light-content' />
  </ThemeProvider>
}