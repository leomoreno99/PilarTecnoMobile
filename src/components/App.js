import 'react-native-gesture-handler';
import React, { Component, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
    View, 
    Text
} from 'react-native';
import AppStack from '../routes/AppStack';

export default App = () => {

    return(
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}