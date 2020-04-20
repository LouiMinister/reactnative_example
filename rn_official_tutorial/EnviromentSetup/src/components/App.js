/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TestComponent from './TestComponent';


const sampe_data = [
  {id:"gdHong",count:0,color:"red"},
  {id:"ksYu",count:0,color:"green"},
  {id:"ssLee",count:0,color:"blue"},
];

const App = () => {
  const [count, setCount] = useState(0);
  const [datas, setDatas] = useState(sampe_data);

  const _updateCount = (idx) =>{
    setCount(count+1);
  }

  const updateCount = (idx) =>{
    const newDatas = [...datas];
    newDatas[idx].count = newDatas[idx].count +1;
    
    setDatas(newDatas);
  }

  console.log(datas);


  return (
    <>
      <View style={styles.container}>
        <Text > asdf</Text>
        <Button
          color="green"
          title={count.toString()}
          onPress={() => _updateCount()} 
        />
        {
          datas.map((data, index) =>{
            console.log(index);
            return (
              <TestComponent 
                key={data.id}
                id={data.id}
                color={data.color}
                title={data.count.toString()}
                updateCount={()=>updateCount(index)}
              />
            )
          })
        }
      </View>
    </>
  );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});



export default App;
