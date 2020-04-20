

import React from 'react';

import {
  View,
  Button,
  Text,
} from 'react-native';

const TestComponent = ({id, color, title, updateCount}) =>{

    return(
    <>
      <View>
        <Text>{id}의 버튼</Text>
        <Button
          color={color}
          title={title}
          onPress={updateCount}/>
      </View>
    </>
    )
  
}

export default TestComponent;