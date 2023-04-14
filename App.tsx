import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import { useFonts, Rajdhani_400Regular } from '@expo-google-fonts/rajdhani';
import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  return <ThemeProvider theme={theme}>
    <Dashboard />
    <StatusBar barStyle='light-content' />
  </ThemeProvider>
}