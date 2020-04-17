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

const App = () => {

  const [count, setCount] = useState(0);

  const _updateCount = () =>{
    setCount(count + 1);
  }


  return (
    <>
      <View style={styles.container}>
        <Button
          color="green"
          title={count.toString()}
          onPress={() => _updateCount()} 
          />
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
