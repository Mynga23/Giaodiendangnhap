import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Authentication from './app/authentication/authentication';

const App = () => {
  return (
    <View style={{flex: 1}}>
    {/* <Text style={{color: 'red '}}>Mudfsdf</Text> */}
      <Authentication />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
