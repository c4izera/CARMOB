// filepath: /c:/Users/cg3027309/Documents/CARMOB/ETAPA 3/loja-react-app/App.tsx
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider } from './src/contexts/ThemeContext'; // NOVA
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
      <RootNavigator />
    </ThemeProvider>
  );
}