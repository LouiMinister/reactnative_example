import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
            title="Go to Buttons!!"
            onPress={() => navigation.navigate('Buttons')}
        />
        <Button
          title="Go to Web"
          onPress={() => navigation.navigate('Web')}
        />
        <Button
          title="Go to Camera"
          onPress={() => navigation.navigate('Camera')}
        />
      </View>
    );
};

export default HomeScreen;