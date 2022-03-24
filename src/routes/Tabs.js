import React, { Component, useCallback } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import HomeStackNavigator from "./HomeStack";
// import ListStackNavigator from "./ListStack";
// import MapStackNavigator from "./MapStack";
// import ProfileStackNavigator from "./ProfileStack";
import { Icon } from "react-native-elements";
import Home from '../screens/Home'
import List from "../screens/List";
import Maps from "../screens/Maps";
import Profile from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

export default Tabs = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#02e3e4"
      inactiveColor="#787481"
      labeled={false}
      barStyle={{ 
        backgroundColor: '#1c1c1c',
        padding: 5,
        paddingHorizontal: 30,

    }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"home"} type="material" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name={"favorite"}
              type="material"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Maps}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"map"} type="material" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={"person"} type="material" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
