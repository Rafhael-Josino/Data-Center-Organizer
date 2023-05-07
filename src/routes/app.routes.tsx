import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";



export function AppRoutes() {
  const theme = useTheme();

  return <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.formUSelected,
      tabBarInactiveTintColor: theme.colors.rack,
      tabBarLabelPosition: 'beside-icon',
      tabBarStyle: {
        backgroundColor: theme.colors.headerBackground,
        height: 60,
      }
    }}
  >
    <Screen 
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarIcon: (({ size, color }) =>
          <MaterialIcons 
            name='format-list-bulleted'
            size={size}
            color={color}
          />
        )
      }}
      />
    <Screen 
      name="Register"
      component={Register}
      options={{
        tabBarIcon: (({ size, color }) =>
          <MaterialIcons 
            name='format-list-bulleted'
            size={size}
            color={color}
          />
        )
      }}
    />
  </Navigator>
}