import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider } from './src/contexts/ThemeContext'; // NOVA
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <HomeScreen />
      </View>
    </ThemeProvider>
  );
}