/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import ButtonScreen from './screens/ButtonsScreen';
import WebScreen from './screens/WebScreen';
import CameraScreen from './screens/CameraScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Buttons" component={ButtonScreen} />
        <Stack.Screen name="Web" component={WebScreen} />
        <Stack.Screen name="Camera" component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
