import 'react-native-gesture-handler';
import React, { Component, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
    View, 
    Text
} from 'react-native';
import AppStack from '../routes/AppStack';
import { Provider } from 'react-redux'
import { store } from '../store';

export default App = () => {

    return(
        <Provider store={store} >
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </Provider>
        
    )
}