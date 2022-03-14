import React, { Component, useCallback } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Maps from '../screens/Maps';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}