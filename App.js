import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Calculatrice from './component/Calculatrice';

export const App = () => {
  return (
    <View style={styles.body}>
      <Calculatrice></Calculatrice>
    </View>
  );
};
const styles= StyleSheet.create({
  body:{
    flex:1
  }
})
export default App;
