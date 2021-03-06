import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
      <AppStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
