import React, { Component, useCallback } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStackNavigator from "./HomeStack";
import ListStackNavigator from "./ListStack";
import MapStackNavigator from "./MapStack";
import ProfileStackNavigator from "./ProfileStack";
import { Icon } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator();

export default Tabs = () => {
  return (
    <Tab.Navigator backBehavior="history">
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"home"} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name={"marker"}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"map"} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"user"} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
