import React, { Component, useCallback } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStack'
import ListStackNavigator from './ListStack'
import MapStackNavigator from './MapStack'
import ProfileStackNavigator from './ProfileStack'

const Tab = createMaterialBottomTabNavigator();

export default Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="List" component={ListStackNavigator} />
      <Tab.Screen name="Map" component={MapStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}