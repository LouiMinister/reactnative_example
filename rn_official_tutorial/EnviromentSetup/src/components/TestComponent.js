

import React from 'react';

import {
  View,
  Button,
  Text,
} from 'react-native';

const TestComponent = (props) =>{

    return(
    <>
      <View>
        <Text>{props.id}의 버튼</Text>
        <Button
          color={props.color}
          title={props.title}
          onPress={props.updateCount}/>
      </View>
    </>
    )
  
}

export default TestComponent;