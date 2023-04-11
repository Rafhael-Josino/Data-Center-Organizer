import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return <>
    <Dashboard/>
    <StatusBar barStyle='light-content' />
  </>
}