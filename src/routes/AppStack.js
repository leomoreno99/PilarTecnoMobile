import React, { Component, useCallback } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs'

const Stack = createStackNavigator();

export default AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
}