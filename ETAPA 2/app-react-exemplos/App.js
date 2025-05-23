import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Inputs from './components/Inputs';
import ScrollViewExample from './components/ScrollViewExamples';

export default function App() {

  return (
    <View style={styles.container}>
      <Inputs />
      <ScrollViewExample />
    </View>
  );
}