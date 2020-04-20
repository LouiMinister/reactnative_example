import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
            title="Go to Buttons"
            onPress={() => navigation.navigate('Buttons')}
        />
      </View>
    );
}

export default HomeScreen;