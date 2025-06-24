import React from 'react';
import { StyleSheet, View } from 'react-native';

import ScrollViewExample from './components/ScrollViewExample';

export default function App() {
 
  return (
    <view style={styles.container}>
      <ScrollViewExample/>
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
