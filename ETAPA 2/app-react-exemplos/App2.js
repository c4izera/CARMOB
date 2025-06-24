import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

import List from './components/List';

export default function App() {
 
  return (
    <view style={styles.container}>
      <View style={styles.redbox}></View>
      <View style={styles.bluebox}></View>
      <View style={styles.blackbox}></View>
      <List/>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: 600,
    marginTop: 150,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',  
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },

});
