import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Rajdhani_400Regular,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes';

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

  return <GestureHandlerRootView style={{ flex: 1 }}>
  <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>

      <StatusBar barStyle='light-content' />
  </ThemeProvider>
    </GestureHandlerRootView>
}