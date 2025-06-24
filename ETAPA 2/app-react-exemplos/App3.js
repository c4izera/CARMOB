import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

import Inputs from './components/inputs';

export default function App() {
 
  return (
    <view style={styles.container}>
      <inputs/>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    marginTop: 150,
  },
});
