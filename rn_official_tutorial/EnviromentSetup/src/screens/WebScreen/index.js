import { WebView } from 'react-native-webview';
import React, {useState} from 'react';


import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const WebScreen = ({navigation}) => {
    return (
      <WebView
        // source={{uri: 'https://www.naver.com'}}
        source={{uri: 'https://web1.prabhukorea.com'}}
      />
    );
}

export default WebScreen; 