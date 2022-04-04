import React, { Component, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Maps from "../screens/Maps";
import List from "../screens/List";
import ListItem from "../screens/ListItem";
import Profile from "../screens/Profile";
import SignIn from "../screens/Auth/SignIn";
import { useSelector } from "react-redux";


const Stack = createStackNavigator();

export default AppStack = () => {
  const user = useSelector(state => state.user.user);
  // console.log(user)
  return (
    <Stack.Navigator headerMode="false">
      {user ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="SignIn" component={SignIn} />
      )}
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="ListItem" component={ListItem} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
