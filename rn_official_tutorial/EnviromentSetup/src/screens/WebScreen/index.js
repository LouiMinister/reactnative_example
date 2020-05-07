import { WebView } from 'react-native-webview';
import React, {useState} from 'react';


import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';

const WebScreen = ({navigation}) => {
    let webview

    const onMessage = (event) => {
        switch(event.nativeEvent.data){
            case "goBack":
                navigation.goBack();
                break;
            case "camera":
                navigation.navigate('Camera');
                break;
        }
        console.log(event.nativeEvent.data);
        webview.postMessage("data on react native");
    }

    return (
      <WebView
        ref = { ref => { webview = ref; }}
        onMessage = { (event) => onMessage(event) }
        source={{uri: 'https://basmtest.ktbcredit.com:8443/apptest'}}
      />
    );
}

export default WebScreen; 